import streamlit as st
import os
import plotly.graph_objects as go
import numpy as np
from collections import OrderedDict
import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import copy
from plotly.subplots import make_subplots
import plotly.figure_factory as ff


try:
    assert st.expander != None
except:
    st.expander = st.beta_expander

def make_ridge_lines(df, transport_types):
    # Since we do not want to plot 50+ lines, we only select some years to plot
    #year_list = transport_types#[1950, 1960, 1970, 1980, 1990, 2000, 2010]
    temp = df#temp[temp['year'].isin(year_list)]

    # as we expect to plot histograms-like plots for each year, we group by year and mean temperature and aggregate with 'count' function
    temp = temp.groupby(['Main Transport Mode', 'One-Way Daily Commute Distance (km)']).agg({'One-Way Daily Commute Distance (km)': 'count'}).rename(columns={'One-Way Daily Commute Distance (km)': 'count'}).reset_index()
    #st.write(temp)

    # the idea behind this ridgeline plot with Plotly is to add traces manually, each trace corresponding to a particular year's temperature distribution
    # thus, we are to store each year's data (temperatures and their respective count) in seperate arrays or pd.series that we store in a dictionnary to retrieve them easily
    array_dict = {} # instantiating an empty dictionnary
    for year in transport_types:
        array_dict[f'x_{year}'] = temp[temp['Main Transport Mode']==year]['One-Way Daily Commute Distance (km)'] # storing the temperature data for each year
        array_dict[f'y_{year}'] = temp[temp['Main Transport Mode']==year]['count'] # storing the temperature count for each year
        array_dict[f'y_{year}'] = (array_dict[f'y_{year}'] - array_dict[f'y_{year}'].min()) \
                                    / (array_dict[f'y_{year}'].max() - array_dict[f'y_{year}'].min()) # we normalize the array (min max normalization)

    # once all of this is done, we can create a plotly.graph_objects.Figure and add traces with fig.add_trace() method
    # since we have stored the temperatures and their respective count for each year, we can plot scatterplots (go.Scatter)
    # we thus iterate over year_list and create a 'blank line' that is placed at y = index, then the corresponding temperature count line
    fig = go.Figure()
    for index, year in enumerate(transport_types):
        fig.add_trace(go.Scatter(
                                x=[0, 50], y=np.full(2, len(transport_types)-index),
                                mode='lines',
                                line_color='white'))

        fig.add_trace(go.Scatter(
                                x=array_dict[f'x_{year}'],
                                y=array_dict[f'y_{year}'] + (len(transport_types)-index) + 0.4,
                                fill='tonexty',
                                name=f'{year}'))

        # plotly.graph_objects' way of adding text to a figure
        fig.add_annotation(
                            x=-5,
                            y=len(transport_types)-index,
                            text=f'{year}',
                            showarrow=False,
                            yshift=10)

    # here you can modify the figure and the legend titles
    fig.update_layout(
                    title='Ridge Plots of Transport/Distance',
                    showlegend=False,
                    xaxis=dict(title='Total Distance (km)'),
                    yaxis=dict(showticklabels=False) # that way you hide the y axis ticks labels
                    )
    return fig
    #fig.show()

def make_multi_histogram(df, transport_types):

    st.markdown("### Distance Travelled By Mode of Transport")
    st.markdown(
        "This information helps us understand how far staff are happy to travel based on their preferred mode of transport. This would help guide decisions on less carbon intensive forms of travel in the future."
    )

    data = make_subplots(rows=len(transport_types), cols=1)
    min = np.min(df["One-Way Daily Commute Distance (km)"])
    max = np.max(df["One-Way Daily Commute Distance (km)"])
    step = (max - min) / 14.0

    for xx, transport in enumerate(transport_types):  # set(df["Main Transport Mode"]):
        df2 = df[df["Main Transport Mode"] == transport]
        trace = go.Histogram(
            x=df2["One-Way Daily Commute Distance (km)"],
            xbins={"start": min, "end": max, "size": step},
            autobinx=False,
            name=transport,
        )
        data.append_trace(trace, xx + 1, 1)
    layout = go.Layout(autosize=False, width=5000, height=5000)
    fig = go.Figure(data=data, layout=layout)

    st.write(fig)

    all_total_km_list = []
    for xx, transport in enumerate(transport_types):  # set(df["Main Transport Mode"]):
        df2 = df[df["Main Transport Mode"] == transport]
        for i, j in zip(
            df2["One-Way Daily Commute Distance (km)"], df2["Num trips to office"]
        ):
            all_total_km_list.append(2 * i * j)

    # data = make_subplots(rows=len(transport_types), cols=1)
    min = np.min(all_total_km_list)
    max = np.max(all_total_km_list)
    step = (max - min) / 14.0

    fig = make_subplots(rows=len(transport_types), cols=1)

    for xx, transport in enumerate(transport_types):  # set(df["Main Transport Mode"]):
        df2 = df[df["Main Transport Mode"] == transport]
        total_km_list = []

        for i, j in zip(
            df2["One-Way Daily Commute Distance (km)"], df2["Num trips to office"]
        ):
            total_km_list.append(2 * i * j)
        trace = go.Histogram(
            x=total_km_list,
            xbins={"start": min, "end": max, "size": step},
            autobinx=False,
            name=transport,
        )
        fig.append_trace(trace, xx + 1, 1)
    st.write(fig)

    st.markdown("### Distribution of Commute Distance")
    st.markdown(
        "This information is useful to understand how far staff have to travel to work, and perhaps guide decisions to prompt less carbon-intensive travel in the future"
    )
    fig = px.histogram(df, x="One-Way Daily Commute Distance (km)", nbins=30)
    st.write(fig)

@st.cache
def make_pie_chart(df, transport_types):
    tt = {}
    tth = {}

    for transport in transport_types:  # set(df["Main Transport Mode"]):
        df2 = df[df["Main Transport Mode"] == transport]
        total_km_list_half = []
        total_km_list = []
        for i, j in zip(
            df2["One-Way Daily Commute Distance (km)"], df2["Num trips to office"]
        ):
            total_km_list.append(2 * i * j)
            total_km_list_half.append(i * j)
        total_km = np.round(np.sum(total_km_list), 0)
        total_kmh = np.round(np.sum(total_km_list_half), 0)
        tt[transport] = total_km
        tth[transport] = total_kmh
    odtt = OrderedDict(tt)
    names = []
    for k in odtt.keys():
        names.append(str(k) + str(" (km)"))

    fig = px.pie(values=list(odtt.values()), names=names)
    return fig


def total_distance_travelled(df, transport_types):
    # tt = {}
    total_km_list = []
    total_km_list_half = []

    for i, j in zip(
        df["One-Way Daily Commute Distance (km)"], df["Num trips to office"]
    ):
        total_km_list.append(2 * i * j)
        total_km_list_half.append(i * j)
    total_km = np.round(np.sum(total_km_list), 0)
    total_kmh = np.round(np.sum(total_km_list_half), 0)

    # total_km = 2 * np.round(sum(df["One-Way Daily Commute Distance (km)"])* sum(df["Num trips to office"]),0)
    # odtt = OrderedDict(tt)
    # names = []
    # for k in odtt.keys():
    #    names.append(str(k)+str(" (km)"))

    # fig = px.pie(values=list(odtt.values()), names=names)
    # total_km = np.round(np.sum(list(tt.values())), 0)
    st.sidebar.markdown("#### Total commute Distance")
    st.sidebar.markdown(
        "of all survey respondants (both ways) {0} (km)".format(total_km)
    )
    st.sidebar.markdown("#### Total commute Distance")
    st.sidebar.markdown(
        "of all survey respondants (one way) {0} (km)".format(total_kmh)
    )

    total_employed_response = df.shape[0]  # np.round(np.sum(list(tt.values())),1)
    st.sidebar.markdown("#### Questioniare Response")
    st.sidebar.markdown("Employee Responses: {0}".format(total_employed_response))
    # st.markdown("of all survey respondants

    # st.markdown(" --- ")
    # st.markdown("A slice is size proportional to effective distance in a week \n with transport type: (One-Way Daily Commute Distance [OWD]) multiplied by (Num trips to office [NTTO]) ")
    # st.latex(r'''Slice = 2 \times OWD \times NTTO''')
    # st.write(fig)

@st.cache
def encode_list(input, encode):
    return [encode[i] for i in input]

@st.cache
def make_sankey_chart(df, transport_types):
    encode = OrderedDict()
    transport_types = list(transport_types)
    for i, name in enumerate(transport_types):
        encode[name] = 4 + i

    less_five_src = df[df["One-Way Daily Commute Distance (km)"] < 5.0].index
    less_five_src = [1.0 for i in range(0, len(less_five_src))]
    less_five_tgt = df[df["One-Way Daily Commute Distance (km)"] < 5.0][
        "Main Transport Mode"
    ]
    less_five_tgt = encode_list(less_five_tgt, encode)
    df_filtered = df[df["One-Way Daily Commute Distance (km)"] >= 5.0]
    df_filtered = df_filtered[df_filtered["One-Way Daily Commute Distance (km)"] < 10.0]

    less_ten_src = (
        df_filtered.index
    )  
    less_ten_src = [2.0 for i in range(0, len(less_ten_src))]
    less_ten_tgt = df_filtered["Main Transport Mode"]
    less_ten_tgt = encode_list(less_ten_tgt, encode)

    greater_ten_src = df[df["One-Way Daily Commute Distance (km)"] >= 10.0].index
    greater_ten_src = [3.0 for i in range(0, len(greater_ten_src))]

    greater_ten_tgt = df[df["One-Way Daily Commute Distance (km)"] >= 10.0][
        "Main Transport Mode"
    ]
    greater_ten_tgt = encode_list(greater_ten_tgt, encode)

    srcs = []
    srcs.extend(less_five_src)
    srcs.extend(less_ten_src)
    srcs.extend(greater_ten_src)
    tgts = []
    tgts.extend(less_five_tgt)
    tgts.extend(less_ten_tgt)
    tgts.extend(greater_ten_tgt)
    assert len(srcs) == len(tgts)
    labels = ["less than 5km", "between 5km and 10km", "greater than 10km"]
    labels.extend(transport_types)
    labels.insert(0, "less than 5km")
    assert len(srcs) == len(tgts)
    colors = [
        "#1f77b4",  # muted blue
        "#ff7f0e",  # safety orange
        "#2ca02c",  # cooked asparagus green
        "#d62728",  # brick red
        "#9467bd",  # muted purple
        "#8c564b",  # chestnut brown
        "#e377c2",  # raspberry yogurt pink
        "#7f7f7f",  # middle gray
        "#bcbd22",  # curry yellow-green
        "#17becf",  # blue-teal
    ]
    encode_list(transport_types, encode)

    fig = go.Figure(
        data=[
            go.Sankey(
                valueformat=".0f",
                valuesuffix="TWh",
                # Define nodes
                node=dict(
                    pad=15,
                    thickness=15,
                    line=dict(color="black", width=0.5),
                    label=labels,
                    color=colors,
                ),
                # Add links
                link=dict(
                    source=srcs,  
                    target=tgts,  
                    value=srcs,  
                ),
            )
        ]
    )

    fig.update_layout(title_text="", font_size=10)
    return fig

@st.cache
def get_locations(df2):
    locs = []
    locs.extend(df2["Monday Work Location"])
    locs.extend(df2["Tuesday Work Location"])
    locs.extend(df2["Wednesday Work Location"])
    locs.extend(df2["Thursday Work Location"])
    locs.extend(df2["Friday Work Location"])
    locs.extend(df2["Saturday Work Location"])
    locs.extend(df2["Sunday Work Location"])
    st.text(set(locs))

@st.cache
def make_corr_gram(df):


    df2 = copy.copy(df)
    del df2["Date"]
    del df2["Incentive Text"]
    del df2["Monday Work Location"]
    del df2["Tuesday Work Location"]
    del df2["Wednesday Work Location"]
    del df2["Thursday Work Location"]
    del df2["Friday Work Location"]
    del df2["Saturday Work Location"]
    del df2["Sunday Work Location"]
    df3 = copy.copy(df2)
    df3["Main Transport Mode"] = df3["Main Transport Mode"].astype("category").cat.codes
    df3["Department"] = df3["Department"].astype("category").cat.codes

    d = df3
    corr = d.corr()
    # Generate a mask for the upper triangle
    mask = np.triu(np.ones_like(corr, dtype=bool))
    # Set up the matplotlib figure
    f1, ax = plt.subplots(figsize=(11, 9))
    # Generate a custom diverging colormap
    cmap = sns.diverging_palette(230, 20, as_cmap=True)
    st.markdown("### A Correlogram")
    with st.expander("Correlogram Explantion:"):
        st.markdown(
            "This heat map answers the question: 'Which Variables are correlated and anti correlated?'' Color bar indicates degree of correlation/anti-correlation."
        )
    sns.heatmap(
        corr,
        mask=mask,
        cmap=cmap,
        vmax=0.3,
        center=0,
        square=True,
        linewidths=0.5,
        annot=True,
        fmt=".2f",
    )  # , cbar_kws={"shrink": .5})
    plt.title("Correlation matrix showing correlation coefficients")
    st.pyplot(f1)

    cov_mat = d.cov()
    mask = np.triu(np.ones_like(cov_mat, dtype=bool))
    # Set up the matplotlib figure
    f2, ax = plt.subplots(figsize=(11, 9))
    # Generate a custom diverging colormap
    cmap = sns.diverging_palette(230, 20, as_cmap=True)
    sns.heatmap(
        cov_mat,
        mask=mask,
        cmap=cmap,
        vmax=0.3,
        center=0,
        square=True,
        linewidths=0.5,
        annot=True,
        fmt=".2f",
    )  # , cbar_kws={"shrink": .5})
    plt.title("Covariance matrix showing covariance coefficients")
    st.pyplot(f2)
    return f1,f2

@st.cache
def make_cluster_gram(df):


    df2 = copy.copy(df)
    del df2["Date"]
    del df2["Incentive Text"]
    del df2["Monday Work Location"]
    del df2["Tuesday Work Location"]
    del df2["Wednesday Work Location"]
    del df2["Thursday Work Location"]
    del df2["Friday Work Location"]
    del df2["Saturday Work Location"]
    del df2["Sunday Work Location"]

    with st.expander("Distribution Plots Explantion:"):
        st.markdown(
            "In the following plots we see that the most correlated variables are distance to office and number of trips to office both seem Normally distributed"
        )
    fig = sns.pairplot(df2, hue="Main Transport Mode")
    st.pyplot(fig)

    f, ax = plt.subplots(figsize=(11, 9))

    fig = sns.pairplot(df2, hue="Department")
    return fig
    #st.pyplot(fig)


def make_scatter_matrix(df):

    import copy

    df2 = copy.copy(df)
    del df2["Date"]
    del df2["Incentive Text"]
    del df2["Monday Work Location"]
    del df2["Tuesday Work Location"]
    del df2["Wednesday Work Location"]
    del df2["Thursday Work Location"]
    del df2["Friday Work Location"]
    del df2["Saturday Work Location"]
    del df2["Sunday Work Location"]
    # st.text(df2.columns)
    st.markdown("plotly scatter matrix")
    st.markdown(
        "Main Transport Mode, Num trips to office, One-Way Daily Commute Distance (km)"
    )
    fig = px.scatter_matrix(
        df2,
        dimensions=[
            "Main Transport Mode",
            "Num trips to office",
            "One-Way Daily Commute Distance (km)",
        ],
        title="Scatter matrix of Transport data set",
        color="Main Transport Mode",
    )
    fig.update_traces(diagonal_visible=False)
    st.write(fig)
    st.markdown("plotly scatter matrix")
    st.markdown("Department, Num trips to office, One-Way Daily Commute Distance (km)")
    fig = px.scatter_matrix(
        df2,
        dimensions=[
            "Department",
            "Num trips to office",
            "One-Way Daily Commute Distance (km)",
        ],
        title="Scatter matrix of Transport data set",
        color="Department",
    )
    fig.update_traces(diagonal_visible=False)

    st.write(fig)

@st.cache
def density_heatmap_(df):
    fig = ff.create_2d_density(
        x=df["One-Way Daily Commute Distance (km)"],
        y=df["Num trips to office"], point_size=4,
    )
    return fig

@st.cache
def density_heatmap_old(df):
    fig = px.density_heatmap(
        df,
        x="One-Way Daily Commute Distance (km)",
        y="Num trips to office",
        marginal_x="histogram",
        marginal_y="histogram",
    )
    return fig


def sheet(df2):
    st.markdown("Processed anonymized data that is visualized")
    #try:
    #    st.markdown(get_table_download_link_csv(df2), unsafe_allow_html=True)
    #except:
    #    pass
    my_expander = st.expander("View Whole Spread Sheet Here:")
    my_expander.table(df2)
    my_expander = st.expander("Access Single Column By Name:")


    df3 = copy.copy(df2)
    del df3["Date"]
    del df3["Incentive Text"]
    del df3["Monday Work Location"]
    del df3["Tuesday Work Location"]
    del df3["Wednesday Work Location"]
    del df3["Thursday Work Location"]
    del df3["Friday Work Location"]
    del df3["Saturday Work Location"]
    del df3["Sunday Work Location"]

    column_genre = my_expander.radio(
        "Choose Spread Sheet Column:",
        list(df3.columns),
    )
    my_expander.write(df2[column_genre])


#def get_table_download_link_csv(df):
#    import base64
#    csv = df.to_csv().encode()
#    b64 = base64.b64encode(csv).decode()
#    href = f'<a href="data:file/csv;base64,{b64}" download="captura.csv" target="_blank">Download csv file</a>'
#    return href
@st.cache
def lump_categories_togethor(df):
    #st.text(transport_types)

    df_lumped = copy.copy(df)
    df_lumped.replace({'Walking': 'Human Powered', 'Bicycle': 'Human Powered'}, inplace=True)
    df_lumped.replace({'Bus': 'pooled/PT', 'Train/tram': 'pooled/PT','Car(passenger)':'pooled/PT'}, inplace=True)
    df_lumped.replace({'E-bike': 'Light Electric', 'E-scooter': 'Light Electric'}, inplace=True)
    #df_lumped.replace({'Car(driver)': 'car', 'Car(passenger)': 'Petrolium', 'Scooter/motorbike':'Petrolium'}, inplace=True)

    #df_lumped["Main Transport Mode"] = df[df["Main Transport Mode"]=='Walking']
    #pd.concat([df_lumped['human_powered'],df[df["Main Transport Mode"]=='Bicycle']])
    #st.write(df_lumped)
    return df_lumped

#import pickle
@st.cache
def get_data():
    try:
        df = pd.read_csv("scripts/ttws.csv")
    except:
        df = pd.read_csv("ttws.csv")

    #os.system('wget --no-check-certificate -O ttws.csv "https://docs.google.com/spreadsheets/d/1t2vrLeczcowJvpkiVkFu_yc1AnfMoYarvdc1uoZXsPo/export?gid=0&format=csv"')

    return df


#@st.cache
def make_sankey_chart3(df, transport_types):
    df = lump_categories_togethor(df)
    transport_types = set(df["Main Transport Mode"])

    encode = {}
    transport_types = list(transport_types)
    for i, name in enumerate(transport_types):
        encode[name] = 2 + i

    less_five_src = df[df["One-Way Daily Commute Distance (km)"] < 20.0].index
    less_five_src = [0.0 for i in range(0, len(less_five_src))]
    less_five_tgt = df[df["One-Way Daily Commute Distance (km)"] < 20.0][
            "Main Transport Mode"
    ]
    less_five_tgt = encode_list(less_five_tgt, encode)

    print(len(less_five_src))
    df_filtered = df[df["One-Way Daily Commute Distance (km)"] >= 20.0]

    less_ten_src = (
        df_filtered.index
    )  # <10].index #and df["One-Way Daily Commute Distance (km)"]<10].index
    less_ten_src = [1.0 for i in range(0, len(df_filtered))]
    print(len(less_ten_src))

    less_ten_tgt = df_filtered["Main Transport Mode"]
    less_ten_tgt = encode_list(less_ten_tgt, encode)

    srcs = []
    srcs.extend(less_five_src)
    srcs.extend(less_ten_src)
    #srcs.extend(greater_ten_src)
    tgts = []
    tgts.extend(less_five_tgt)
    tgts.extend(less_ten_tgt)

    E = list(zip(srcs,tgts))

    # nodes must be numbers in a sequential range starting at 0 - so this is the
    # number of nodes. you can assert this is the case as well if desired
    size = len(set([n for e in E for n in e]))
    # make an empty adjacency list
    adjacency = [[0]*size for _ in range(size)]
    # populate the list for each edge
    for sink, source in E:
        adjacency[int(sink)][int(source)] += 1
    assert len(srcs) == len(tgts)
    labels = ["less than 15km","greater than 15km"]
    labels.extend(transport_types)
    assert len(transport_types) == len(encode)

    assert len(srcs) == len(tgts)
    assert len(labels) == 2+len(encode)
    colors = [
        "#1f77b4",  # muted blue
        "#ff7f0e",  # safety orange
        "#2ca02c",  # cooked asparagus green
        "#d62728",  # brick red
        "#9467bd",  # muted purple
        "#8c564b",  # chestnut brown
        "#e377c2",  # raspberry yogurt pink
        "#7f7f7f",  # middle gray
        "#bcbd22",  # curry yellow-green
        "#17becf",  # blue-teal
    ]
    encode_list(transport_types, encode)

    fig = go.Figure(
        data=[
            go.Sankey(
                valueformat=".0f",
                valuesuffix="TWh",
                # Define nodes
                node=dict(
                    pad=15,
                    thickness=15,
                    line=dict(color="black", width=0.5),
                    label=labels,
                    color=colors,
                ),
                # Add links
                link=dict(
                    source=srcs, 
                    target=tgts, 
                    value=tgts,  
                ),
            )
        ]
    )

    fig.update_layout(
    hovermode = 'x',
    font=dict(size = 10, color = 'white'),
    plot_bgcolor='black',
    paper_bgcolor='black')
    return fig

@st.cache
def make_sankey_chart2(df, transport_types):
    encode = {}
    transport_types = list(transport_types)
    for i, name in enumerate(transport_types):
        encode[name] = 2 + i

    less_five_src = df[df["One-Way Daily Commute Distance (km)"] < 20.0].index
    less_five_src = [0.0 for i in range(0, len(less_five_src))]
    less_five_tgt = df[df["One-Way Daily Commute Distance (km)"] < 20.0][
            "Main Transport Mode"
    ]
    less_five_tgt = encode_list(less_five_tgt, encode)

    print(len(less_five_src))
    df_filtered = df[df["One-Way Daily Commute Distance (km)"] >= 20.0]

    less_ten_src = (
        df_filtered.index
    )  # <10].index #and df["One-Way Daily Commute Distance (km)"]<10].index
    less_ten_src = [1.0 for i in range(0, len(df_filtered))]
    print(len(less_ten_src))

    less_ten_tgt = df_filtered["Main Transport Mode"]
    less_ten_tgt = encode_list(less_ten_tgt, encode)

    srcs = []
    srcs.extend(less_five_src)
    srcs.extend(less_ten_src)
    #srcs.extend(greater_ten_src)
    tgts = []
    tgts.extend(less_five_tgt)
    tgts.extend(less_ten_tgt)

    E = list(zip(srcs,tgts))

    # nodes must be numbers in a sequential range starting at 0 - so this is the
    # number of nodes. you can assert this is the case as well if desired
    size = len(set([n for e in E for n in e]))
    # make an empty adjacency list
    adjacency = [[0]*size for _ in range(size)]
    # populate the list for each edge
    for sink, source in E:
        adjacency[int(sink)][int(source)] += 1
    assert len(srcs) == len(tgts)
    labels = ["less than 15km","greater than 15km"]
    labels.extend(transport_types)
    assert len(transport_types) == len(encode)

    assert len(srcs) == len(tgts)
    assert len(labels) == 2+len(encode)
    colors = [
        "#1f77b4",  # muted blue
        "#ff7f0e",  # safety orange
        "#2ca02c",  # cooked asparagus green
        "#d62728",  # brick red
        "#9467bd",  # muted purple
        "#8c564b",  # chestnut brown
        "#e377c2",  # raspberry yogurt pink
        "#7f7f7f",  # middle gray
        "#bcbd22",  # curry yellow-green
        "#17becf",  # blue-teal
    ]
    encode_list(transport_types, encode)

    fig = go.Figure(
        data=[
            go.Sankey(
                valueformat=".0f",
                valuesuffix="TWh",
                # Define nodes
                node=dict(
                    pad=15,
                    thickness=15,
                    line=dict(color="black", width=0.5),
                    label=labels,
                    color=colors,
                ),
                # Add links
                link=dict(
                    source=srcs,  
                    target=tgts,  
                    value=tgts,  
                ),
            )
        ]
    )

    fig.update_layout(
    hovermode = 'x',
    font=dict(size = 10, color = 'black'))
    return fig


def __main__():
    st.title("Your Councils Work Commute")
    st.markdown(
        "With your help, were building an understanding of how our commute effects our future environment. \n"
    )
    st.markdown(
        "Below is a summary of the data collected, with some comparisons of the total staff distance travelled and associated carbon emissions."
    )

    df = get_data()

    transport_types = set(df["Main Transport Mode"])
    total_distance_travelled(df, transport_types)

    genre = st.sidebar.radio(
        "Choose Graph Layout/Option:",
        (
            "Sankey Charts",
            "Density Heatmap",
            "Pie Chart",
            "Spreadsheet",
            "View Source Code",
        ),
    )

    if genre == "Ridge Plots":
        fig = make_ridge_lines(df, transport_types)

        st.plotly_chart(fig, use_container_width=True)

    if genre == "View Source Code":
        st.markdown("### Code Here")
        st.markdown(
            """[mostly in this repository](https://github.com/CodeforAustralia/council-emissions-calculator)"""
        )
    if genre == "Spreadsheet":
        sheet(df)
    if genre == "Pie Chart":
        fig = make_pie_chart(df, transport_types)
        st.markdown("#### Total Distance and Transport Type Pie chart")
        st.markdown(" --- ")

        st.plotly_chart(fig, use_container_width=True)

        with st.expander("Pie Chart explanation"):
            st.markdown(
                "A slice is size proportional to effective distance in a week \n with transport type: (One-Way Daily Commute Distance [OWD]) multiplied by (Num trips to office [NTTO]) "
            )
            st.latex(r"""Slice = 2 \times OWD \times NTTO""")

    if genre == "Sankey Charts":
        st.markdown("### Three different Sankey Diagrams, Scroll down...")

        fig = make_sankey_chart(df, transport_types)
        st.plotly_chart(fig, use_container_width=True)

        st.markdown("### ")

        fig = make_sankey_chart2(df, transport_types)
        st.plotly_chart(fig, use_container_width=True)
        #st.markdown("### Scroll down...")

        fig = make_sankey_chart3(df, transport_types)
        #st.markdown("### Sankey Diagram")
        st.plotly_chart(fig, use_container_width=True)
        with st.expander("Sankey Diagram Explanation"):
            st.markdown(
                "With this diagram we can ask, does distance determine transport type"
            )
            st.markdown(
                "This could help reason about the cost/benefit of E-bikes/scooters versus traditional bikes"
            )
            st.markdown(
                "Sources (srcs) are groups of three intervals of distances travelled, they are: "
            )
            st.latex(r"""d<5km,d>=5km \cap x=<10km,d>10km""")

    if genre == "Histogram Distances":
        make_multi_histogram(df, transport_types)
    if genre == "Density Heatmap":
        st.markdown("### Distribution plots number of Trips to Office versus Distance")
        st.markdown("all transport")
        st.markdown("X-axis is distance, Y-axis is number of trips to office")

        fig = density_heatmap_(df)
        #st.write(fig)
        st.plotly_chart(fig, use_container_width=True)

        trans_options = list(transport_types)
        sub_genre = st.radio(
            "Choose transport Option:",
            trans_options,
        )
        st.markdown("distribution plot of:")
        st.markdown(sub_genre)
        df3 = df[df["Main Transport Mode"] == sub_genre]

        #def density_heatmap_(df):
        fig = ff.create_2d_density(
            x=df3["One-Way Daily Commute Distance (km)"],
            y=df3["Num trips to office"],
            point_size=4,
        )
        #    return fig

        #fig = px.density_heatmap(
        #    df3,
        #    x="One-Way Daily Commute Distance (km)",
        #    y="Num trips to office",
        #    marginal_x="histogram",
        #    marginal_y="histogram",
        #)
        st.plotly_chart(fig, use_container_width=True)

        #st.write(fig)
    if genre == "Covariance":
        f2 = make_corr_gram(df)
        st.pyplot(f2, use_container_width=True)
        st.markdown("### A Covariance Matrix")

        with st.expander("Covariance Explantion:"):
            st.markdown(
                "This covariance heat map answers the question: 'Which Variables covary togethor?'' Color bar indicates degree of covariance."
            )

    if genre == "Pair Plots":
        fig = make_cluster_gram(df)
        st.pyplot(fig, use_container_width=True)
    # st.title("Distribution plots")
    # if 1 == 0:
    # for transport in transport_types:
    # dcc.Graph(figure=clustergram)

    # make_scatter_matrix(df)


__main__()

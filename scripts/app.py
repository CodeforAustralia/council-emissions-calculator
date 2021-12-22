import streamlit as st
import os
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import numpy as np
from collections import OrderedDict
import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.graph_objects as go
#st.set_page_config(layout="wide")

def make_pie_chart(df,transport_types):
    tt={}
    for transport in transport_types:#set(df["Main Transport Mode"]):
        df2 = df[df["Main Transport Mode"]==transport]
        tt[transport] = 2*np.round(sum(df2["One-Way Daily Commute Distance (km)"])*sum(df2["Num trips to office"]),2)
    odtt = OrderedDict(tt)
    names = []
    for k in odtt.keys():
        names.append(str(k)+str(" (km)"))

    fig = px.pie(values=list(odtt.values()), names=names)
    st.markdown("### Distance versus Transport Mode Pie chart")
    st.markdown(" --- ")
    st.markdown("A slice is size proportional to effective distance in a week \n with transport type: (One-Way Daily Commute Distance [OWD]) multiplied by (Num trips to office [NTTO]) ")
    st.latex(r'''Slice = 2 \times OWD \times NTTO''')
    st.write(fig)


def encode_list(input,encode):
    return [ encode[i] for i in input ]

def make_sankey_chart(df,transport_types):
    encode = {}

    for i,name in enumerate(transport_types):
        encode[name] = len(df.index) + i

    less_five_src = df[df["One-Way Daily Commute Distance (km)"]<5.0].index
    less_five_src = [1.0 for i in range(0,len(less_five_src))]

    less_five_tgt = df[df["One-Way Daily Commute Distance (km)"]<5.0]["Main Transport Mode"]
    less_five_tgt = encode_list(less_five_tgt,encode)

    #df_filtered = df.query('a == 4 & b != 2')

    #df1 = df[(df.a != -1) & (df.b != -1)]
    df_filtered = df[df["One-Way Daily Commute Distance (km)"]>=5.0]
    df_filtered = df_filtered[df_filtered["One-Way Daily Commute Distance (km)"]<10.0]
    #st.write(df_filtered)

    less_ten_src = df_filtered.index#<10].index #and df["One-Way Daily Commute Distance (km)"]<10].index
    less_ten_src = [2.0 for i in range(0,len(less_ten_src))]

    less_ten_tgt = df_filtered["Main Transport Mode"]
    less_ten_tgt = encode_list(less_ten_tgt,encode)


    greater_ten_src = df[df["One-Way Daily Commute Distance (km)"]>=10.0].index
    greater_ten_src = [3.0 for i in range(0,len(greater_ten_src))]

    greater_ten_tgt = df[df["One-Way Daily Commute Distance (km)"]>=10.0]["Main Transport Mode"]
    greater_ten_tgt = encode_list(greater_ten_tgt,encode)


    srcs = []
    srcs.extend(less_five_src)
    srcs.extend(less_ten_src)
    srcs.extend(greater_ten_src)

    tgts = []
    tgts.extend(less_five_tgt)
    tgts.extend(less_ten_tgt)
    tgts.extend(greater_ten_tgt)



    fig = go.Figure(data=[go.Sankey(
        valueformat = ".0f",
        valuesuffix = "TWh",
        # Define nodes
        node = dict(
          pad = 15,
          thickness = 15,
          line = dict(color = "black", width = 0.5),
          label =  srcs,
          color = "blue"
        ),
        # Add links
        link = dict(
          source =  srcs,#data['data'][0]['link']['source'],
          target =  tgts,#data['data'][0]['link']['target'],
          value = [20 for i in range(0,len(srcs))],#[8, 4, 2, 8, 4, 2]

     ))])

    fig.update_layout(title_text="",
                      font_size=10)

    st.markdown("### Sankey Diagram")
    st.markdown(" --- ")
    st.markdown("Sources (srcs) are groups of three intervals of distances travelled, targets (tgts) are organized by mode of transport 9")
    st.write(fig)


def __main__():
    try:
        df = pd.read_csv("scripts/ttws.csv")
    except:
        df = pd.read_csv("ttws.csv")

    st.markdown("# Civic Makers Climate Change")
    transport_types = set(df["Main Transport Mode"])

    make_pie_chart(df,transport_types)
    st.title("Distribution plots")
    fig = px.density_heatmap(df, x="One-Way Daily Commute Distance (km)", y="Num trips to office", marginal_x="histogram", marginal_y="histogram")
    st.write(fig)

    make_sankey_chart(df,transport_types)



    #fig = go.Figure()
    #fig.add_trace(go.Histogram(x=df["One-Way Daily Commute Distance (km)"],name="Distance"))
    #fig.add_trace(go.Histogram(x=df["Num trips to office"],name="Number of trips"))

    # Overlay both histograms
    #fig.update_layout(barmode='overlay')
    # Reduce opacity to see both histograms
    #fig.update_traces(opacity=0.75)
    #st.write(fig)
    #import plotly.express as px
    #df = px.data.iris()
    import copy
    df2 = copy.copy(df)
    del df2["Date"]
    del df2["Incentive Text"]
    del df2["Monday Work Location"]
    del df2["Tuesday Work Location"]
    del df2['Wednesday Work Location']
    del df2['Thursday Work Location']
    del df2['Friday Work Location']
    del df2['Saturday Work Location']
    del df2['Sunday Work Location']
    #st.text(df2.columns)
    fig = px.scatter_matrix(df2,
        dimensions=["Main Transport Mode", "Num trips to office", "One-Way Daily Commute Distance (km)"],
        title="Scatter matrix of Transport data set",color="Main Transport Mode")
    fig.update_traces(diagonal_visible=False)
    st.write(fig)

    fig = px.scatter_matrix(df2,
        dimensions=["Department", "Num trips to office", "One-Way Daily Commute Distance (km)"],
        title="Scatter matrix of Transport data set",color="Department")
    fig.update_traces(diagonal_visible=False)

    st.write(fig)
    #fig.show()
    #st.write(df)
    #fig = px.histogram(df, x="One-Way Daily Commute Distance (km)", y="Num trips to office",
    #                   marginal="box", # or violin, rug
    #                   hover_data=df.columns)

    #st.text(df.columns)

    #fig.show()

    #
    #fig = plt.figure()

    #sns.displot(data=df, x="One-Way Daily Commute Distance (km)", hue="Main Transport Mode", col="Num trips to office", kind="kde")
    #st.pyplot(fig)
    #st.title("Pairplots")

    #fig = plt.figure()
    #sns.pairplot(df, hue="Main Transport Mode")
    #st.pyplot(fig)

#fig = sns.pairplot(penguins, hue="species")
#st.pyplot(fig)

__main__()

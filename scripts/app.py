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
    st.markdown("Sources (srcs) are groups of three intervals of distances travelled there are three (x<5km,x>5km &x<10km,x>10km), targets (tgts) are organized by mode of transport 9")
    st.write(fig)


def make_scatter_matrix(df):

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
    st.markdown("plotly scatter matrix")
    st.markdown("Main Transport Mode, Num trips to office, One-Way Daily Commute Distance (km)")
    fig = px.scatter_matrix(df2,
        dimensions=["Main Transport Mode, Num trips to office, One-Way Daily Commute Distance (km)"],
        title="Scatter matrix of Transport data set",color="Main Transport Mode")
    fig.update_traces(diagonal_visible=False)
    st.write(fig)
    st.markdown("plotly scatter matrix")
    st.markdown("Department", "Num trips to office", "One-Way Daily Commute Distance (km)")
    fig = px.scatter_matrix(df2,
        dimensions=["Department", "Num trips to office", "One-Way Daily Commute Distance (km)"],
        title="Scatter matrix of Transport data set",color="Department")
    fig.update_traces(diagonal_visible=False)

    st.write(fig)



def __main__():
    try:
        df = pd.read_csv("scripts/ttws.csv")
    except:
        df = pd.read_csv("ttws.csv")

    st.markdown("# Civic Makers Climate Change")
    transport_types = set(df["Main Transport Mode"])

    make_pie_chart(df,transport_types)


    make_sankey_chart(df,transport_types)
    st.markdown("Distribution plots # Trips to Office versus Distance (all transport)")
    fig = px.density_heatmap(df, x="One-Way Daily Commute Distance (km)", y="Num trips to office", marginal_x="histogram", marginal_y="histogram")
    st.write(fig)
    st.title("Distribution plots")

    for transport in transport_types:
        st.markdown("distribution plot of:")
        st.markdown(transport)
        df3 = df[df["Main Transport Mode"]==transport]
        fig = px.density_heatmap(df3, x="One-Way Daily Commute Distance (km)", y="Num trips to office", marginal_x="histogram", marginal_y="histogram")
        st.write(fig)

    make_scatter_matrix(df)


__main__()

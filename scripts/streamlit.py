import streamlit as st
import os
import pandas as pd
import plotly.express as px

df3 = pd.read_csv("ttws.csv")

# df3["Main Transport Mode"=="bike"]
def __main__():
    # st.text(bike)
    # fig = px.pie(values=df3["One-Way Daily Commute Distance (km)"], names=df3["One-Way Daily Commute Distance (km)"])
    # st.write(fig)#.show()
    st.table(df3)


__main__()

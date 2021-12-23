using CSV
using Dash
using Dash
using DataFrames, UrlDownload
using PlotlyJS
using Revise
#import Pkg; Pkg.add("DashHtmlComponents")
using DashHtmlComponents
using DashCoreComponents
#run(`wget --no-check-certificate -O ttws.csv "https://docs.google.com/spreadsheets/d/1t2vrLeczcowJvpkiVkFu_yc1AnfMoYarvdc1uoZXsPo/export?gid=0&format=csv"`)
df3 = CSV.read("ttws.csv")
names(df3)

#import pandas as pd;df = pd.read_csv('ttws.csv')
#df



#response=HTTP.get("https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/sankey_energy.json")
#data=JSON.parse(String(response.body))
#=
plot(
    sankey(
        valueformat = ".0f",
        valuesuffix = "TWh",
        node = attr(
            pad = 15,
            thickness = 15,
            line = attr(color = "black", width = 0.5),
            label = df["Main Transport Mode"],
            color = df["One-Way Daily Commute Distance (km)"]["color"]
        ),
        link = attr(
            source = df["Main Transport Mode"],
            target = df["One-Way Daily Commute Distance (km)"],
            value = df["One-Way Daily Commute Distance (km)"],
            label = df["Main Transport Mode"]
        )
    ),
    Layout(
        hovermode = "x",
        title="Energy forecast for 2050<br>Source: Department of Energy & Climate Change, Tom Counsell via <a href='https://bost.ocks.org/mike/sankey/'>Mike Bostock</a>",
        font=attr(size = 10, color = "white"),
        plot_bgcolor="black",
        paper_bgcolor="black"
    )
)

=#
#app = dash()

#=app.layout = html_div() do
    html_h1("Hello Dash"),
    #html_div("Dash: A web application framework for your data."),
    dcc_graph(
        id = "example-graph-1",
        #figure = (
        #    data = [
        #        (x = ["giraffes", "orangutans", "monkeys"], y = [20, 14, 23], type = "bar", name = "SF"),
        #        (x = ["giraffes", "orangutans", "monkeys"], y = [12, 18, 29], type = "bar", name = "Montreal"),
        #    ],
        #    layout = (title = "Dash Data Visualization", barmode="group")
        #)

        figure = plot(
            pie(
            labels=df3["Main Transport Mode"],
            values=df3["One-Way Daily Commute Distance (km)"]
            )
        )


    )
end
=#

function generate_table(dataframe, max_rows = 10)
    html_table([
        html_thead(html_tr([html_th(col) for col in names(df3)])),
        html_tbody([
            html_tr([html_td(dataframe[r, c]) for c in names(dataframe)]) for r = 1:min(nrow(dataframe), max_rows)
        ]),
    ])
end

app = dash()

app.layout = html_div() do
    html_h4("US Agriculture Exports (2011)"),
    generate_table(df3, 10)
    figure = plot(
        pie(
        labels=df3["Main Transport Mode"],
        values=df3["One-Way Daily Commute Distance (km)"]
        )
    )
end

run_server(app, "0.0.0.0", debug=true)

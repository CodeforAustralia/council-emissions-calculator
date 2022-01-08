TO build sankey.html etc

Run

```
pip install -r requirements.txt
```

Run
```
python ingest_data_dump_sankey_html.py
```

This will make the following html files which can then be nested inside html web pages:


[Sankey1](https://htmlpreview.github.io/?https://github.com/russelljjarvis/council-emissions-calculator/blob/main/scripts/sankey0.html)

[Sankey2](https://htmlpreview.github.io/?https://github.com/russelljjarvis/council-emissions-calculator/blob/main/scripts/sankey1.html)

[Sankey3](https://htmlpreview.github.io/?https://github.com/russelljjarvis/council-emissions-calculator/blob/main/scripts/sankey2.html)

[density heatmap](https://htmlpreview.github.io/?https://github.com/russelljjarvis/council-emissions-calculator/blob/main/scripts/density_heatmap.html)

This could be updated automatically and run on real data, as more and more data gets ingested by the survey
Also see council-emissions-calculator/.github/workflows/python_run.yml

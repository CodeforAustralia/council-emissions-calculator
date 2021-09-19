#This script creates "dummy data" for the Civic Makers carbon calculator project

#HOW TO RUN THIS SCRIPT: 
# 1) Install R from https://cran.ms.unimelb.edu.au/
# 2) Uncomment the "install.packages" rows below if you don't already have these packages installed
# 3) From Command line (set to the directory where this script is saved), run the command ` Rscript make_dummy_json.R ` 
# 4) This should produce two outputs: a .png (?) that shows 

# install.packages("ggplot2")
# install.packages("jsonlite")
# install.packages("ggridges")

library(tidyverse)  #packages for manipulating data
library(jsonlite) #package for converting dataframe into json
library(ggridges) #package for making a ridgeline chart, so we can preview what the dataset should look like as a ridgeline chart in Highcharts


#This makes a vector of N numbers (N being the first number in the brackets!), randomly sampled from the normal distribution using the mean and standard deviation specified. I've just tried to guess the mean & sd for each of the transport types, and assumed there would be more responses for car/train/bike/walk than for motorbike/taxi... very broad guesses, may need to be tweaked!!

Bike <- rnorm(80, mean=5, sd=3)
Walk <- rnorm(50, mean=3, sd=1)
Train <- rnorm(100, mean=20, sd=7)
Car <- rnorm(100, mean=30, sd=10)
Motorbike <- rnorm(10, mean=15, sd=2)
Bus <- rnorm(50, mean=15, sd=4)
Taxi <- rnorm(10, mean=10, sd=2)

#This combines all of the transport type vectors into one dataset 

modes <- rbind(
  data.frame(mode = "Bike", distance = Bike),
  data.frame(mode = "Walk", distance = Walk),
  data.frame(mode = "Train", distance = Train),
  data.frame(mode = "Car", distance = Car),
  data.frame(mode = "Motorbike", distance = Motorbike),
  data.frame(mode = "Bus", distance = Bus),
  data.frame(mode = "Taxi", distance = Taxi)
  )


#This makes a plot out of the dataset that should closely resemble what we're making in highcharts, just to see what the shape should be!
ggplot(modes, aes(x=distance, y=mode)) +
  geom_density_ridges(aes(fill=mode))


#This converts the dataset to json and writes it to a json file in the working directory
write_json(modes, path = ".jsonmodes.json")

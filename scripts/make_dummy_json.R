#This script creates "dummy data" for the Civic Makers carbon calculator project

#HOW TO RUN THIS SCRIPT:
#1a) The easiest way, if possible, is to install the free desktop RStudio IDE from https://www.rstudio.com/products/rstudio/download/  The IDE installs R for you, and it makes it pretty painless to install packages (it works out the dependencies for you). It also has a Viewer that shows you the visualisations, rather than downloading them as a separate file.

#1b) OR - If you DON'T want to install RStudio - then Install R from https://cran.ms.unimelb.edu.au/

# 2) Uncomment the "install.packages" rows of code at the top of the script below if you don't already have these packages installed

# 3a) If you're using RStudio, you can select the lines of the script that you want to run and hit "Run" (selecting everything is fine, but it may be useful to run line-by-line if you want to watch the interim results)

# 3b) If you're not using RStudio, then from Command line (set to the directory where this script is saved), run the command ` Rscript make_dummy_json.R ` 

# 4) This should produce two outputs: a json file called 'jsonmodes.json' containing sample transport data in json form, and the image file with the sample ggridges chart


#Packages to install: uncomment these lines to install the packages!

# install.packages("ggplot2")
# install.packages("jsonlite")
# install.packages("ggridges")


library(jsonlite) #package for converting dataframe into json
library(ggplot2)  #package for creating a chart
library(ggridges) #package for making a ggplot2 chart into a ridgeline chart, so we can preview what the dataset should look like as a ridgeline chart in Highcharts


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

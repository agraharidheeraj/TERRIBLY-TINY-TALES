# TERRIBLY TINY TALES Project
 Project Details - Fetch The Data and Show in Histogram 

## Live Project Link - "(monumental-rabanadas-3725b2.netlify.app)"
In the project directory, you can run:

### `npm start`

# App.js Component 

we initialize the chart state variable as an null . When the "Submit" button is clicked, it triggers the clickHandler function, which performs an HTTP GET request to the specified URL. The retrieved data is then stored in the content state variable using the setChart function.

# Functionality in App.js

we use the useState hook to manage the chart state, which holds the data for the histogram. The csv state variable is used to disable the "Submit" button and show a loading message when fetching the content.

## Library and Dependencies I Use 
Install the required Dependencies and add Library as per the requirements 
### `npm install axios react-apexcharts react-csv `

#Basic Usage
## `import React, { useState } from 'react';`

# Functionality That Works
* When the "Submit" button is clicked, it triggers the fetchData function. it will fetch text content from the URL https://www.terriblytinytales.com/test.txt
* The fetched text content is converted to lowercase and split into words.
* Once the chart data is available, the component renders a BarChart component from the recharts library, displaying the 20 most occurring words.
* Additionally, an "Export" button is provided, which triggers the handleClick function to generate a CSV file with the csv data for download.
* 

# Dependencies
## The App component uses the following dependencies:
* `axios` For making HTTP requests to fetch the text data.
*  `react-apexcharts` For rendering the histogram chart.
*  `react-csv` For exporting the histogram data as a CSV file.

# Index.css For Styling 
* Given the Classname btn-api for button styling in Index.css 

# Build Our Project Using
#`npm run build`

# Hosting from Netlify
Netlify Provide a best way to Live our Project So I use Netlify For Making Project Live






import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { CSVLink } from 'react-csv';
import axios from 'axios';


const App = () => {
    const [chartOptions, setChartOptions] = useState(null);
    const [csvData, setCsvData] = useState(null);

    const clickhandler = async () => {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const text = response.data.toLowerCase();
      const words = text.split(/\s+/);

        const acc = {};

        for (let i = 0; i < words.length; i++) {
            if (acc[words[i]] === undefined) {
                acc[words[i]] = 1;
            } else {
                acc[words[i]]++;
            }
        }

        const sortedFrequencies = Object.entries(acc).sort((a, b) => b[1] - a[1]).slice(0, 20);
        console.log(sortedFrequencies);
        const labels = sortedFrequencies.map(([word, ]) => word); 
        const values = sortedFrequencies.map(([, count]) => count); 
        console.log(labels, values);
        setChartOptions({
            chart: {
                type: 'bar',
                height: 400,
            },
            series: [{ data: values }],
            xaxis: {
                categories: labels,
            },
            yaxis: {
                title: {
                    text: 'Frequency',
                },
            },
        });

        setCsvData(labels.map((label, index) => 
        ({ label, value: values[index] })));
    };

    return (
        <div >
            <button className='btn-api ' onClick={clickhandler} >Submit For Data</button>
            {chartOptions && (
                <>
                    <Chart options={chartOptions} series={chartOptions.series} style={{ color: "#eb8334"}}  type="bar" height={500} />
                    <button className='btn-api'><CSVLink style={{ color: 'black', textDecoration: "none" }} data={csvData} filename={'histogram.csv'}>Export</CSVLink></button>
                </>
            )}
        </div>
    );
};

export default App;
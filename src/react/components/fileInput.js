import React from 'react';
import {Line} from 'react-chartjs-2';
import ReactDOM from 'react-dom';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }

    render() {
        function convertTemp(tempF) {
            return Math.round((parseInt(tempF) - 32) * 5 / 9);
        }
        function tempsTable(rawdata) {
            let htmltable = '<table>';
            let lines = rawdata.split("\n");
            lines.pop();
            let labelData = lines[0].split(',');
            let dateLabel = labelData[0];
            let tempLabelF = labelData[1] + ' F&#176;';
            let tempLableC = 'Temperature C&#176;';
            htmltable += "<tr><th>" + dateLabel + "</th><th>" + tempLabelF + "</th><th>" + tempLableC + "</th><tr>";
            lines.shift();
            lines.forEach(element => {
                let holder = element.split(',');
                let conversion = convertTemp(holder[1]);
                htmltable += "<tr><td>" + holder[0] + "</td><td>" + holder[1] + "</td><td>" + conversion.toString() + "</td><tr>"
            });
            htmltable += "</table>"
            return htmltable;
        }
        function tempsChart(rawdata) {
            const chartDivF = document.getElementById('show-f-chart');
            const chartDivC = document.getElementById('show-c-chart');
            let lines = rawdata.split("\n");
            lines.pop();
            lines.shift();
            let dateArray = [];
            let tempInFArray = [];
            let tempInCArray = [];
            lines.forEach(element => {
                let holder = element.split(',');
                dateArray.push(holder[0]);
                tempInFArray.push(holder[1]);
                tempInCArray.push(convertTemp(holder[1]));
            });
            const tempsInC = {
                labels: dateArray,
                datasets: [
                    {
                        label: "Temperature (Celsius)",
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(250,250,250,1)',
                        borderColor: 'rgba(0,0,255,1)',
                        borderWidth: 1,
                        data: tempInCArray
                    }
                ]
            }
            const tempsInF = {
                labels: dateArray,
                datasets: [
                    {
                        label: "Temperature (Fahrenheit)",
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(250,250,250,1)',
                        borderColor: 'rgba(255,0,0,1)',
                        borderWidth: 1,
                        data: tempInFArray
                    }
                ]
            }
            ReactDOM.render(
                <Line
                    data={tempsInC}
                    options={{
                        title: {
                            display: true,
                            text: "Average Temps in Celsius",
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            , chartDivC);
            ReactDOM.render(
                <Line
                    data={tempsInF}
                    options={{
                        title: {
                            display: true,
                            text: "Average Temps in Fahrenheit",
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            , chartDivF);
        }
        function showFile() {
            let preview = document.getElementById('show-text');
            let file = document.querySelector('input[type=file]').files[0];
            let reader = new FileReader()

            let textFile = /text.*/;

            if (file.type.match(textFile)) {
            reader.onload = function (event) {
                let data = event.target.result;
                let table = tempsTable(data);
                tempsChart(data);
                preview.innerHTML = table;
            }
            } else {
            preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
            }
            reader.readAsText(file);
        }
        return(
            <div>
                <p>
                    <input id="file-input" type="file" />
                    <button onClick={showFile}>Submit</button>
                </p>
                <hr />
                <div className="data-container">
                    <div id="show-c-chart" className="chart"></div>
                    <div id="show-f-chart" className="chart"></div>
                    <div id="show-text" className="temp-table"></div>
                </div>
            </div>
        )
    }
}
export default FileInput;
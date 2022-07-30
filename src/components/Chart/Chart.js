import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint, index) => (
            <ChartBar
                key={index}
                value={dataPoint.value}
                maxValue={totalmaximum}
                label={dataPoint.label} />))}
        </div>
    );
}

export default Chart;

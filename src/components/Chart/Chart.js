import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) =>{

    const dataPointsValue = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMaximun = Math.max(...dataPointsValue);
    return(
        <div className = "chart">
            {props.dataPoints.map((dataPoints) =>(
                <ChartBar 
                    key ={dataPoints.id}
                    value ={dataPoints.value}
                    maxValue={totalMaximun}
                    label={dataPoints.label}
                />
            ))}
        </div>
    )

}
export default Chart;
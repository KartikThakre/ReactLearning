import Chart from "../Chart/Chart"


const ExpenceChart = (props) => {

    const chartdataPoints =[
        {label :'jan', value: 0},
        {label :'feb', value: 0},
        {label :'mar', value: 0},
        {label :'apr', value: 0},
        {label :'may', value: 0},
        {label :'jun', value: 0},
        {label :'jul', value: 0},
        {label :'aug', value: 0},
        {label :'sep', value: 0},
        {label :'oct', value: 0},
        {label :'nov', value: 0},
        {label :'dec', value: 0},
    ];

    for (const expence of props.expences){
        const expenceMonth = expence.date.getMonth();
        chartdataPoints[expenceMonth].value = expence.amount;
    }

    return <Chart dataPoints={chartdataPoints} />

}
export default ExpenceChart
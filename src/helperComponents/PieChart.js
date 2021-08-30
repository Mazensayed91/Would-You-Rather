import React from "react";
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import ReactColorSquare from "react-color-square"



const PieChart = (props) => {

    const data = [
        { argument:"Option1", value:props.options.Option1, label: "elmango" },
        { argument:'Option2', value:props.options.Option2 },
    ];
    return (
    <div>
        <div style={{
            margin: "auto",
            width: "50%",
            padding: "10px"
        }}>

            <ReactColorSquare height={10} width = {10} color="#eb7d34" />
            <p>{props.optionOne}</p>
            <br/>
            <ReactColorSquare height={10} width = {10} color="#34a2eb" />
            <p>{props.optionTwo}</p>
        </div>
        <Paper>

            <Chart
                data={data}
            >

                <PieSeries valueField="value" argumentField="argument" />
                <Title text="Option one vs Option two"/>

            </Chart>
        </Paper>
    </div>
    );
}

export default PieChart;
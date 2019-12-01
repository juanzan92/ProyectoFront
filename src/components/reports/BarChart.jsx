import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const marks = [
  {
    value: 3,
    label: "3 Meses"
  },
  {
    value: 6,
    label: "6 Meses"
  },
  {
    value: 12,
    label: "12 Meses"
  }
];

const styleFilter = {
  padding: "2px"
};

function valuetext(value) {
  return `${value}M`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      months: 3,
      data: this.props.data
    };
  }

  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  handleChange = (event, months) => this.setState({ months: months });

  handleDragStop = () => this.props.update(this.state.months);

  render() {
    var auxData = this.state.data.slice(0, this.state.months);
    return (
      <>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={auxData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#8884d8" />
            <Bar dataKey="income" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <div style={{ margin: "2.3rem" }}>
          <Typography id="discrete-slider-restrict" gutterBottom>
            Seleccionar Periodo
          </Typography>
          <Slider
            defaultValue={3}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            max={12}
            min={0}
            style={styleFilter}
            onChange={this.handleChange}
            onDragStop={this.handleDragStop}
            name={"inputFilter"}
          />
        </div>
      </>
    );
  }
}

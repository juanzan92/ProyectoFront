import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    subject: "Celulares",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Constr",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Herra",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Hogar",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Moda",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Tecno",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/6ebcxbx4/";

  render() {
    return (
      <ResponsiveContainer width="120%" height={400}>
        <RadarChart
          cx={173}
          cy={190}
          outerRadius={150}
          width={365}
          height={400}
          data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

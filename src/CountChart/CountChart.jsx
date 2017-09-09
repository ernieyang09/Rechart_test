import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './style.scss';

class CountChart extends Component {
  render() {
    return (
      <ResponsiveContainer aspect={3}>
        <LineChart data={this.props.dataSet}>
          <XAxis dataKey='date'/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default CountChart;

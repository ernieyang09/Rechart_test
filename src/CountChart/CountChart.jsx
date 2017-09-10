import React, { Component } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Surface,
} from 'recharts'
import moment from 'moment'
import * as R from 'ramda'
import './style.scss'

class CountChart extends Component {

  xTickShow = () => (
    R.pipe(
       R.addIndex(R.map)((data, i)=> (this.checkIsMonday(moment(data.Date))) ? i : false),
       R.reject((data) => !data)
    )(this.props.dataSet)
  )

  xAxisShow = (index) => {
    const dateString = this.props.dataSet[index].Date;
    return moment(dateString).format('MM/DD');
  }

  checkIsMonday = (date) => date.format("dddd") === 'Sunday';

  render() {
    const xTick = this.xTickShow()

    return (
      <ResponsiveContainer aspect={4}>
        <LineChart data={this.props.dataSet}>
          <XAxis
            tickFormatter={this.xAxisShow}
            ticks={xTick}
          />
          <YAxis/>
          <CartesianGrid
            strokeDasharray="3 3"
          />
          <Line type="basic" dataKey="count" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default CountChart;

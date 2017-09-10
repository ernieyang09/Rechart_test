import React, { Component } from 'react'
import {
  AreaChart,
  Area,
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

class TrafficChart extends Component {

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
        <AreaChart data={this.props.dataSet}>
          <XAxis
            tickFormatter={this.xAxisShow}
            ticks={xTick}
          />
          <YAxis/>
          <CartesianGrid
            strokeDasharray="3 3"
          />
          <Area dataKey="count" />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

export default TrafficChart;

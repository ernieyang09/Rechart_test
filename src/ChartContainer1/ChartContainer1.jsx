import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { ChartAction1 } from './'
import CountChart from '../CountChart'

class ChartContainer extends Component {

  randomData = () => {
    const detail = R.map(()=> ({
      applications: this.randomDataCategory('applications'),
      things: this.randomDataCategory('things'),
    }), Array(31));
    const total = R.addIndex(R.map)( (data, i) => ({
      Date: (i<9) ? `2017-08-0${i+1}` : `2017-08-${i+1}`,
      count: R.pipe(R.keys, R.reduce((acc, key) => acc + data[key].count , 0))(data),
    }), detail);
    this.props.UpdateData({total, detail});
  }

  randomDataCategory = (category) => ({
    path: `/${category}`,
    count: R.pipe( R.multiply(1000) ,Math.ceil)(Math.random()),
  })

  render() {
    return (
      <div>
        <CountChart dataSet={this.props.chart1.total} />
        <input type="button" value='test' onClick={this.randomData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chart1: state.chart1,
});

const mapDispatchToProps = dispatch => bindActionCreators(ChartAction1,dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartContainer);

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { ChartAction1 } from './'

class ChartContainer extends Component {

  randomData = () => {
    const detail = R.map(()=> ({
      applications: this.randomDataCategory('applications'),
      things: this.randomDataCategory('things'),
    }), Array(31));
    const total = R.addIndex(R.map)( (data, i) => ({
      Date: (i<9) ? `2017-08-0${i+1}` : `2017-08-${i+1}`,
      count: R.reduce((acc, key) => acc + data[key].count , 0, Object.keys(data))
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

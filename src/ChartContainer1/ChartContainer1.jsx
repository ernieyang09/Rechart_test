import React, { Component } from 'react'
import * as R from 'ramda';

class ChartContainer extends Component {


  randomData = () => {
    const detail = R.map(()=> ({
      applications: this.randomDataCategory('applications'),
      things: this.randomDataCategory('things'),
    }),Array(31));
    console.log(detail);
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

export default ChartContainer;

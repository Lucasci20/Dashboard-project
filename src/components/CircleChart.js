import { useState } from 'react'
import Chart from 'react-apexcharts'

import React, { Component } from 'react'

class CircleChart extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          options: { 
              chart: {
                  type: 'donut'
              }
           },
          series: [58, 34.9, 6.5],
          chartOptions: {
              labels: ['A', 'B', 'C'],
          }
         
        }
      }
    
      render() {
    
        return (
          <>
            <Chart options={this.state.options} series={this.state.series} type="donut" width="100%" height="100%"/>
          </>
        );
      }
}

export default CircleChart
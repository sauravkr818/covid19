import React from 'react';
import Chart from 'react-apexcharts';


export default class Chart1 extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        arr:[],
        series: [{
          name: 'Infected',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Recovered',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      };
    
    }
    componentDidMount (){
    //   let arr = [];
    //   console.log(props.data[0].dailyconfirmed);
    //   this.setState({
    //     props1:[...props],
    //   })
    //   for(let i=0;i<this.state.props1.data.length;i++) {
    //    this.setState({
    //      arr : [...this.state.props1.data[i].dailyconfirmed],
    //    })
    //   }
    //  console.log(this.state.props1);

    const res = fetch("https://data.covid19india.org/data.json");
    console.log(res);
    // const actualData = res.json();
    // this.setState({
    //   arr : [...actualData.cases_time_series],
    // })
    console.log(this.state.arr);
    }
  
  
    render() {
      console.log(this.state.arr)
      return (
                <div id="chart" className="container-fluid  p-0">
                    <Chart options={this.state.options} series={this.state.series} type="area"/>
                </div>
          );
        }
      }

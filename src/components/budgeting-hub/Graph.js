import React from 'react';
import {Doughnut, Line} from 'react-chartjs-2';
import './Graph.css';

const state = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: 'Incoming',
      backgroundColor: [
        
        '#008000'
      ],
      hoverBackgroundColor: [
     
      '#35014F'
      ],
      data: [25, 50, 65, 60, 75],
      fill: false,
      borderColor: '#008000'
    },
    {
        label: 'Outgoing',
        backgroundColor: [
          '#800000',
         
        ],
        hoverBackgroundColor: [
        '#501800',
       
        ],
        data: [35, 15, 45, 55, 68],
        fill: false,
        tension: 0.05,
        borderColor: '#800000'

      }
  ]
}

const state1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: 'Incoming',
      backgroundColor: [
        
        '#008000',
        '#bbbbbb',
        '#808000',


      ],
      hoverBackgroundColor: [
     
      '#35014F'
      ],
      data: [15, 21, 35, 45, 80],
      fill: false,
      borderColor: '#008000'
    }
  ]
}

export class PieGraph extends React.Component {
  render() {
    return (
      <div className="PieContainer">
        <Doughnut
          data={state1}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

export function LineGraph({title}) {
  
 
  function handleChange(event) {
    this.setState({labelPoints: event.target.value});
  }
      return (

        <div className="LineContainer">
<h6>{title}</h6>
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20,
              },
              interaction: {
                intersect: false,
                mode: 'index',
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
  


import React, { useRef, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { PolarArea } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import './graph.scss'
import anime from 'animejs'
// const {CategoryScale} = Chart
// CategoryScale.call()
Chart.register(LinearScale, PointElement, CategoryScale, LineElement, BarElement)
function Graphskill() {

  const data = {
    labels: ['JAVASCRIPT', 'CSS', 'HTML', 'REACT', 'NODEJS', 'MONGODB'],
    datasets: [{
      label: 'Skills chart',
      data: [80, 90, 92, 84, 80, 79],
      backgroundColor: [
        'rgba(241, 252, 79,0.4)',
        'rgb(255, 99, 71, 0.4)',
        'rgba(255, 165, 0,0.4)',
        ' rgba(135, 206, 235, 0.4)',
        'rgba(0, 128, 0, 0.4)',
        'rgba(154, 205, 50,0.4)'
      ],
      borderColor: [
        'rgb(241, 252, 79)',
        "tomato",
        "orange",
        "skyblue",
        "green",
        "yellowgreen",
      ],
      borderWidth: 1
    }]
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="graph" >
      <div className="line" >
        <Bar data={data} options={options} />

      </div>

    </div>
  )
}

export default Graphskill

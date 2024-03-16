import { useState } from 'react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface PieAgePropType {
  series: number[]
  options: ApexOptions
}

const defaultProps = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  } as ApexOptions,
}
const PieAge = (props: PieAgePropType = defaultProps) => {
  const [state] = useState(props)
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  )
}

export default PieAge

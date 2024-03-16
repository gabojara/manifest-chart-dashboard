import { useState } from 'react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface DountGenderPropType {
  series: number[]
  options: ApexOptions
}

const defaultProps = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
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
const DountGender = (props: DountGenderPropType = defaultProps) => {
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

export default DountGender

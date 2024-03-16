import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface DountAgePropType {
  series?: number[]
  options?: ApexOptions
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
const DountAge = ({
  series = defaultProps.series,
  options = defaultProps.options,
}: DountAgePropType) => {
  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  )
}

export default DountAge

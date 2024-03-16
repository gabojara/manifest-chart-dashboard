import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface DountGenderPropType {
  series?: number[]
  options?: ApexOptions
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
const DountGender = ({
  series = defaultProps.series,
  options = defaultProps.options,
}: DountGenderPropType) => {
  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  )
}

export default DountGender

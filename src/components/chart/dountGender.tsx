import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface DountGenderPropType {
  series?: number[]
  options?: ApexOptions
}

const defaultProps = {
  series: [60, 40],
  options: {
    colors: ['#FBA1D7', '#6EB6F4'],
    chart: {
      type: 'donut',
    },
    labels: ['Female', 'Male'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%'
      },
    },
    stroke: {
      width: 1,
      colors: ['white'],
    },
    plotOptions: {
      pie: {
        customScale: 1,
        startAngle: -45,
        endAngle: 315,
        donut: {
          size: '50%',
          labels: {
            show: true,
            name: {
              show: true,
              label: 'Gender',
            },
            value: {
              show: true,
              showAlways: false,
              fontFamily: 'RUBIK',
              fontWeight: 'bold',
              fontSize: '16px',
            },
            total: {
              label: 'Gender',
              showAlways: false,
              show: true,
              fontFamily: 'RUBIK',
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#000000',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      markers: {
        radius: 2,
      },
      position: 'right',
      offsetY: 50,
    },
  } as ApexOptions,
}
const DountGender = ({
  series = defaultProps.series,
  options = defaultProps.options,
}: DountGenderPropType) => {
  return (
    <ReactApexChart
      className="flex size-[370px] items-center justify-between"
      options={options}
      series={series}
      type="donut"
    />
  )
}

export default DountGender

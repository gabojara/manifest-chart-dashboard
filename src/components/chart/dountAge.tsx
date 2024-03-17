import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface DountAgePropType {
  series?: number[]
  options?: ApexOptions
}

const defaultProps = {
  series: [30, 27, 28, 15],
  options: {
    chart: {
      type: 'donut',
    },
    colors: ['#F28E50', '#B2FC95', '#F8EBBB', '#6EB6F4'],
    labels: ['18- years', '19 -24 years', '25-34 years', '35+ years'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%'
      },
    },
    plotOptions: {
      pie: {
        size: 200,
        customScale: 1,
        startAngle: -45,
        endAngle: 315,
        donut: {
          size: '50%',
          labels: {
            show: true,
            name: {
              show: true,
              formatter: function () {
                return 'Age'
              },
            },
            value: {
              show: true,
              showAlways: false,
              fontFamily: 'RUBIK',
              fontWeight: 'bold',
              fontSize: '16px',
            },
            total: {
              label: 'Age',
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
      fontSize: '12px',
      fontFamily: 'Rubik',
      markers: {
        radius: 2,
      },
      position: 'right',
      offsetY: 50,
    },
  } as ApexOptions,
}
const DountAge = ({
  series = defaultProps.series,
  options = defaultProps.options,
}: DountAgePropType) => {
  return (
    <ReactApexChart
      className="flex size-[400px] items-center justify-between"
      options={options}
      series={series}
      type="donut"
    />
  )
}

export default DountAge

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
      height: '400px',
      width: '400px',
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
  } as ApexOptions,
}
const DountAge = ({
  series = defaultProps.series,
  options = defaultProps.options,
}: DountAgePropType) => {
  return (
    <div>
      <ReactApexChart
        width={'400px'}
        height={'400px'}
        options={options}
        series={series}
        type="donut"
      />
    </div>
  )
}

export default DountAge

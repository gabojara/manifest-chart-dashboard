import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useTheme } from 'hooks'
import AgeData from 'mockup/age.json'

const DonutAge = () => {
  const { themeColors } = useTheme()
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    colors: [
      themeColors.manifest?.orange,
      themeColors.manifest?.green,
      themeColors.manifest?.yellow,
      themeColors.manifest?.blue,
    ],
    labels: ['18- years', '19 -24 years', '25-34 years', '35+ years'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%'
      },
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
              formatter: function () {
                return 'Age'
              },
            },
            value: {
              show: true,
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
  }

  return (
    <div>
      <ReactApexChart
        className="flex w-[360px] items-center justify-between desktop-sm:w-[400px]"
        options={options}
        series={AgeData.series}
        type="donut"
      />
    </div>
  )
}

export default DonutAge

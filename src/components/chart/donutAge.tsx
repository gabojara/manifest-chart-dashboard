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
    tooltip: {
      fillSeriesColor: false,
      theme: 'dark',
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        console.log(dataPointIndex, series, seriesIndex)
        return `<div class="arrow_box" style="padding: 4px 6px; border-radius: 6px;">
            <div style="display: flex; align-items: center; justify-content: flex-start; gap: 6px">
              <div style="width: 12px; height: 12px; border-radius: 2px; background-color: ${options.colors?.[seriesIndex]};"></div>
              <div>${options.labels?.[seriesIndex]}</div>
              </div>
            <div style="display: flex; align-items: center; justify-content: flex-start; gap: 6px">
              <div>Users :</div>
              <div>${series[seriesIndex]}</div>
              <div>(${((series[seriesIndex] / series.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)) * 100).toFixed(1)}%)</div>
            </div>
          </div>`
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
              color: themeColors.manifest?.dark,
            },
            value: {
              show: true,
              fontFamily: 'RUBIK',
              fontWeight: 'bold',
              fontSize: '16px',
              color: themeColors.manifest?.dark,
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

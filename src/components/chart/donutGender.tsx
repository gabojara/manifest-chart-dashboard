import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useTheme } from 'hooks'
import GenderData from 'mockup/gender.json'

interface DonutGenderPropType {
  series?: number[]
  options?: ApexOptions
}

const DonutGender = ({}: DonutGenderPropType) => {
  const { themeColors } = useTheme()
  const options: ApexOptions = {
    colors: [themeColors.manifest?.pink, themeColors.manifest?.blue],
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
  }

  return (
    <div>
      <ReactApexChart
        className="flex w-[330px] items-center justify-between desktop-sm:w-[370px]"
        options={options}
        series={GenderData.series}
        type="donut"
      />
    </div>
  )
}

export default DonutGender

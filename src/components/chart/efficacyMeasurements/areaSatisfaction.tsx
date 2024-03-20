import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useTheme } from 'hooks'
import satisfactionData from 'mockup/satisfaction.json'

const AreaSatisfaction = () => {
  const { themeColors } = useTheme()
  const options: ApexOptions = {
    chart: {
      height: 215,
      type: 'area',
    },
    colors: [themeColors.manifest?.blue],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    xaxis: {
      categories: ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
    },
    yaxis: {
      title: {
        text: 'Satisfaction Rate(%)',
        style: {
          fontFamily: 'Rubik',
          fontSize: '10px',
          color: themeColors.manifest?.gray,
          fontWeight: '600',
        },
      },
    },
    title: {
      text: 'SATISFACTION',
      style: {
        fontFamily: 'Rubik',
        fontSize: '14px',
        color: themeColors.manifest?.gray,
        fontWeight: '600',
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  }
  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={satisfactionData.series}
        type="area"
        height={270}
      />
    </div>
  )
}

export default AreaSatisfaction

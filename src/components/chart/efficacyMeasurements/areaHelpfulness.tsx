import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useTheme } from 'hooks'
import helpfulnessData from 'mockup/helpfulness.json'

const AreaHelpfulness = () => {
  const { themeColors } = useTheme()
  const options: ApexOptions = {
    chart: {
      height: 215,
      type: 'area',
    },
    colors: [themeColors.manifest?.green],
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
        text: 'Rate',
        style: {
          fontFamily: 'Rubik',
          fontSize: '10px',
          color: themeColors.manifest?.gray,
          fontWeight: '600',
        },
      },
    },
    title: {
      text: 'HELPFULNESS',
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
        series={helpfulnessData.series}
        type="area"
        height={270}
      />
    </div>
  )
}

export default AreaHelpfulness

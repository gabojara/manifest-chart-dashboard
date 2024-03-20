import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Divider } from 'components/common'
import topDiscussedTopicsData from 'mockup/topDiscussedTopic.json'

const ColumnTopTopics = () => {
  const options: ApexOptions = {
    chart: {
      height: 200,
      type: 'bar',
      zoom: {
        enabled: false,
        autoScaleYaxis: false,
      },
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + ''
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },

    xaxis: {
      categories: topDiscussedTopicsData.categories,
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          fontSize: '12px',
        },
        formatter: function (value) {
          if (value.length > 10) {
            return value.slice(0, 7) + '...'
          }
          return value
        },
        rotate: 0,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val + ''
        },
      },
      title: {
        text: 'Frequency',
        style: {
          fontSize: '12px',
          color: '#6F7274',
          fontWeight: '600',
        },
      },
    },
  }
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="font-rubik text-[16px] font-medium">
        TOP DISCUSSED TOPICS
      </h2>
      <Divider />
      <div className="w-full">
        <ReactApexChart
          series={topDiscussedTopicsData.series}
          options={options}
          type="bar"
          height={210}
        />
      </div>
    </div>
  )
}

export default ColumnTopTopics

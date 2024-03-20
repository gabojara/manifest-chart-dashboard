import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Divider } from 'components/common'
import averageSessionData from 'mockup/averageSessions.json'

const ColumnAverageSession = () => {
  const options: ApexOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: averageSessionData.categories,
    },
    yaxis: [
      {
        title: {
          text: 'Users',
        },
      },
    ],
  }
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="font-rubik text-[16px] font-medium">
        AVERAGE OF SESSIONS
      </h2>
      <Divider />
      <div className="w-full">
        <ReactApexChart
          series={averageSessionData.series}
          options={options}
          type="bar"
          height={210}
        />
      </div>
    </div>
  )
}

export default ColumnAverageSession

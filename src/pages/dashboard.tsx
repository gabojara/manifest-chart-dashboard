import * as Chart from '../components/chart'
import ChartCard from '../components/card/chartCard'

export const Dashboard = () => {
  return (
    <div className="h-[150vh] w-full bg-[#FFFDF4]">
      <ChartCard>
        <Chart.Grade />
      </ChartCard>
      {/* <Chart.AreaTotalSessions /> */}
      <ChartCard>
        <Chart.DountGender />
      </ChartCard>
      <ChartCard>
        <Chart.DountAge />
      </ChartCard>
    </div>
  )
}

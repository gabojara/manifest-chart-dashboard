import * as Chart from '../components/chart'
import ChartCard from '../components/card/chartCard'

export const Dashboard = () => {
  return (
    <div className="w-full bg-[#FFFDF4]">
      <ChartCard>
        <Chart.Grade />
      </ChartCard>
      <ChartCard>
        <Chart.AreaTotalSessions />
      </ChartCard>
      <ChartCard>
        <Chart.DountGender />
      </ChartCard>
      <ChartCard>
        <Chart.DountAge />
      </ChartCard>
    </div>
  )
}

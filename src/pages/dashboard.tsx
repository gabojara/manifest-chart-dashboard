import * as Chart from '../components/chart'
import ChartCard from '../components/card/chartCard'

export const Dashboard = () => {
  return (
    <div className="w-full bg-[#FFFDF4]">
      <div className="grid grid-flow-row grid-cols-2 gap-[30px] p-40">
        <div className="flex flex-col gap-[20px]">
          <ChartCard>
            <Chart.ActiveStudents />
          </ChartCard>
          <ChartCard>
            <Chart.AreaTotalSessions />
          </ChartCard>
        </div>
        <div className="flex flex-col justify-between gap-[20px]">
          <div className="grid grid-flow-row grid-cols-2 gap-[20px]">
            <ChartCard>
              <Chart.DountGender />
            </ChartCard>
            <ChartCard>
              <Chart.DountAge />
            </ChartCard>
          </div>
          <div>
            <ChartCard>
              <Chart.Grade />
            </ChartCard>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <Chart.AreaSessionLength />
            <Chart.ColumnAverageSession />
          </div>
          <div>
            <Chart.HeatMapPeakUsageTime />
          </div>
        </div>
        <div>
          <Chart.EfficacyMeasurements />
        </div>
        <div>
          <Chart.ColumnTopTopics />
        </div>
        <div>
          <Chart.DountUserSentimentOverview />
        </div>
      </div>
    </div>
  )
}

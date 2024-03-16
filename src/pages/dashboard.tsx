import * as Chart from '../components/chart'
import ChartCard from '../components/card/chartCard'

export const Dashboard = () => {
  return (
    <div className="w-full bg-[#FFFDF4] p-[100px]">
      <div className="flex items-center justify-between">
        <span className="py-40 font-rubik text-[40px] font-bold leading-[100%]">
          Manifest Analytics Dashboard
        </span>
        <div className="flex items-center gap-8">
          <span className="pr-12 font-rubik text-[16px] font-medium uppercase">
            Filter By
          </span>
          <button className="w-[96px] rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[16px] leading-[140%] text-[#6F7274]">
            Age
          </button>
          <button className="w-[96px] rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[16px] leading-[140%] text-[#6F7274]">
            Grade
          </button>
          <button className="w-[96px] rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[16px] leading-[140%] text-[#6F7274]">
            Gender
          </button>
          <button className="w-[96px] rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[16px] leading-[140%] text-[#6F7274]">
            School
          </button>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="grid flex-1 grid-cols-2 gap-[20px]">
          <ChartCard className="col-span-2 w-full">
            <Chart.ActiveStudents />
          </ChartCard>
          <ChartCard className="col-span-2 w-full">
            <Chart.AreaTotalSessions />
          </ChartCard>
          <Chart.AreaSessionLength className="col-span-1 w-full" />
          <Chart.ColumnAverageSession className="col-span-1 w-full" />
          <Chart.HeatMapPeakUsageTime className="col-span-2 w-full" />
          <Chart.ColumnTopTopics className="col-span-2 w-full" />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-[20px]">
          <ChartCard className="col-span-1 w-full">
            <Chart.DountGender />
          </ChartCard>
          <ChartCard className="col-span-1 w-full">
            <Chart.DountAge />
          </ChartCard>
          <ChartCard className="col-span-2 w-full">
            <Chart.Grade />
          </ChartCard>
          <Chart.EfficacyMeasurements className="col-span-2 w-full" />
          <Chart.DountUserSentimentOverview className="col-span-2 w-full" />
        </div>
      </div>
    </div>
  )
}

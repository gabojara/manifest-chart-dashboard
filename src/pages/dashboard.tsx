import * as Chart from '../components/chart'
import ChartCard from '../components/card/chartCard'

export const Dashboard = () => {
  return (
    <div className="w-full bg-[#FFFDF4] p-[100px] px-24 pt-[60px] mobile:px-32 mobile:pt-80 tablet:px-64 tablet:pt-[100px] desktop-s:px-[100px]">
      <div className="flex w-full flex-col items-center justify-start py-[20px] desktop:flex-row desktop:justify-between">
        <span className="self-start py-40 font-rubik text-[24px] font-bold leading-[0%] mobile:text-[32px] tablet:text-[40px] desktop:self-center">
          Manifest Analytics Dashboard
        </span>
        <div className="flex max-w-full items-center gap-8 self-end desktop:self-center">
          <span className="pr-12 font-rubik text-[14px] font-medium uppercase tablet:text-[16px]">
            Filter By
          </span>
          <button className="w-64 rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[14px] leading-[140%] text-[#6F7274] tablet:w-[96px] tablet:text-[16px]">
            Age
          </button>
          <button className="w-64 rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[14px] leading-[140%] text-[#6F7274] tablet:w-[96px] tablet:text-[16px]">
            Grade
          </button>
          <button className="w-64 rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[14px] leading-[140%] text-[#6F7274] tablet:w-[96px] tablet:text-[16px]">
            Gender
          </button>
          <button className="w-64 rounded-[8px] border border-[#C9CED1] bg-white px-12 py-8 text-left text-[14px] leading-[140%] text-[#6F7274] tablet:w-[96px] tablet:text-[16px]">
            School
          </button>
        </div>
      </div>
      <div className="hidden w-full gap-[20px] desktop-s:flex">
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
        <div className="grid h-fit flex-1 grid-cols-2 gap-[20px]">
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
      <div className="grid w-full flex-1 grid-cols-2 gap-[20px] desktop-s:hidden">
        <ChartCard className="col-span-2 w-full">
          <Chart.ActiveStudents />
        </ChartCard>
        <ChartCard className="col-span-1 w-full">
          <Chart.DountGender />
        </ChartCard>
        <ChartCard className="col-span-1 w-full">
          <Chart.DountAge />
        </ChartCard>
        <ChartCard className="col-span-2 w-full">
          <Chart.AreaTotalSessions />
        </ChartCard>
        <ChartCard className="col-span-2 w-full">
          <Chart.Grade />
        </ChartCard>
        <Chart.AreaSessionLength className="col-span-1 w-full" />
        <Chart.ColumnAverageSession className="col-span-1 w-full" />
        <Chart.EfficacyMeasurements className="col-span-2 w-full" />
        <Chart.HeatMapPeakUsageTime className="col-span-2 w-full" />
        <Chart.ColumnTopTopics className="col-span-2 w-full" />
        <Chart.EfficacyMeasurements className="col-span-2 w-full" />
      </div>
    </div>
  )
}

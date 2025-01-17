import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import Divider from 'components/common/divider'
import { useTheme } from 'hooks'
import { ForwardDownIcon } from 'components/common/icons/forwardDown.svg'
import totalSessionsData from 'mockup/totalSessions.json'

const AreaTotalSessions = () => {
  const { themeColors } = useTheme()
  const options: ApexOptions = {
    colors: [themeColors.manifest?.blue],
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
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
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      // style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Jan 2023').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    stroke: {
      curve: 'smooth',
    },
  }
  const [timeline, setTimeline] = useState('Yearly')
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    switch (timeline) {
      case 'Monthly':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('28 Jan 2023').getTime(),
          new Date('27 Feb 2023').getTime()
        )
        break
      case 'Half Year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('1 Jan 2023').getTime(),
          new Date('20 June 2023').getTime()
        )
        break
      case 'Yearly':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('1 Jan 2023').getTime(),
          new Date('27 Dec 2023').getTime()
        )
        break
      case 'ALL':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('23 Jan 2023').getTime(),
          new Date('27 Dec 2023').getTime()
        )
        break
      default:
    }
  }, [timeline])

  return (
    <div className="flex w-full flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <h2 className="font-rubik text-[16px] font-medium">TOTAL SESSIONS</h2>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="inline-flex w-[110px] cursor-pointer select-none items-center justify-between rounded-md border border-gray-100 bg-gray-100 px-10 py-8 font-rubik text-[16px] text-black hover:bg-gray-50"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <h5>{timeline}</h5>
            <ForwardDownIcon className="size-10" />
          </div>
          {isOpen && (
            <div
              className="absolute right-0 z-10 mt-2 flex w-full flex-col overflow-hidden rounded-md text-left font-rubik text-[12px]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                id="Monthly"
                onClick={() => {
                  setTimeline('Monthly')
                  toggleDropdown()
                }}
                className="flex w-full items-start px-10 py-8"
                style={{
                  backgroundColor:
                    timeline === 'Monthly'
                      ? themeColors.manifest?.blueSoft
                      : '#f2f2f2',
                  color:
                    timeline === 'Monthly'
                      ? themeColors.manifest?.blue
                      : 'black',
                }}
              >
                Monthly
              </button>

              <button
                id="Half Year"
                onClick={() => {
                  setTimeline('Half Year')
                  toggleDropdown()
                }}
                className="flex w-full items-start px-10 py-8"
                style={{
                  backgroundColor:
                    timeline === 'Half Year'
                      ? themeColors.manifest?.blueSoft
                      : '#f2f2f2',
                  color:
                    timeline === 'Half Year'
                      ? themeColors.manifest?.blue
                      : 'black',
                }}
              >
                6 Months
              </button>

              <button
                id="Yearly"
                onClick={() => {
                  setTimeline('Yearly')
                  toggleDropdown()
                }}
                className="flex w-full items-start px-10 py-8"
                style={{
                  backgroundColor:
                    timeline === 'Yearly'
                      ? themeColors.manifest?.blueSoft
                      : '#f2f2f2',
                  color:
                    timeline === 'Yearly'
                      ? themeColors.manifest?.blue
                      : 'black',
                }}
              >
                Yearly
              </button>

              <button
                id="ALL"
                onClick={() => {
                  setTimeline('ALL')
                  toggleDropdown()
                }}
                className="flex w-full items-start px-10 py-8"
                style={{
                  backgroundColor:
                    timeline === 'ALL'
                      ? themeColors.manifest?.blueSoft
                      : '#f2f2f2',
                  color:
                    timeline === 'ALL' ? themeColors.manifest?.blue : 'black',
                }}
              >
                ALL
              </button>
            </div>
          )}
        </div>
      </div>
      <Divider />
      <div className="w-full">
        <ReactApexChart
          options={options}
          series={totalSessionsData.series}
          type="area"
          height={210}
        />
      </div>
    </div>
  )
}

export default AreaTotalSessions

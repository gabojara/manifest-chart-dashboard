import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import Divider from 'components/common/divider'
import { useTheme } from 'hooks'
import { ForwardDownIcon } from 'components/common/icons/forwardDown.svg'
import sessionLengthData from 'mockup/sessionLength.json'

const AreaSessionLength = () => {
  const { themeColors } = useTheme()
  const options: ApexOptions = {
    colors: [themeColors.manifest?.green],
    chart: {
      id: 'area-session-length',
      type: 'area',
      height: 300,
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
    yaxis: [
      {
        title: {
          text: 'Sessions length (min)',
        },
      },
    ],
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2022').getTime(),
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
          'area-session-length',
          'zoomX',
          new Date('28 Jan 2023').getTime(),
          new Date('27 Feb 2023').getTime()
        )
        break
      case 'Half Year':
        ApexCharts.exec(
          'area-session-length',
          'zoomX',
          new Date('1 Jan 2023').getTime(),
          new Date('20 June 2023').getTime()
        )
        break
      case 'Yearly':
        ApexCharts.exec(
          'area-session-length',
          'zoomX',
          new Date('1 Jan 2023').getTime(),
          new Date('27 Dec 2023').getTime()
        )
        break
      case 'ALL':
        ApexCharts.exec(
          'area-session-length',
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
        <h2 className="font-rubik text-[16px] font-medium">SESSION LENGTH</h2>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="inline-flex w-[100px] items-center justify-between rounded-md border border-gray-200 bg-gray-200 px-10 py-8 font-rubik text-[16px] text-black hover:bg-gray-50"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <h5>{timeline}</h5>
            <ForwardDownIcon className="size-10" />
          </div>
          {isOpen && (
            <div
              className="absolute right-0 z-10 mt-2 flex w-full flex-col"
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
                className={timeline === 'Monthly' ? 'bg-[blue]' : 'bg-gray-300'}
              >
                Monthly
              </button>

              <button
                id="Half Year"
                onClick={() => {
                  setTimeline('Half Year')
                  toggleDropdown()
                }}
                className={
                  timeline === 'Half Year' ? 'bg-[blue]' : 'bg-gray-300'
                }
              >
                6 Months
              </button>

              <button
                id="Yearly"
                onClick={() => {
                  setTimeline('Yearly')
                  toggleDropdown()
                }}
                className={timeline === 'Yearly' ? 'bg-[blue]' : 'bg-gray-300'}
              >
                Yearly
              </button>

              <button
                id="ALL"
                onClick={() => {
                  setTimeline('ALL')
                  toggleDropdown()
                }}
                className={timeline === 'ALL' ? 'bg-[blue]' : 'bg-gray-300'}
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
          series={sessionLengthData.series}
          type="area"
          height={210}
        />
      </div>
    </div>
  )
}

export default AreaSessionLength

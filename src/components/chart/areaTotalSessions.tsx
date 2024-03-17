import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import Divider from '../common/divider'
import { ForwardDownIcon } from '../common/icons/forwardDown.svg'

interface AreaTotalSessionsPropType {
  series?: {
    data: number[][]
  }[]
  options?: ApexOptions
  selection?: string
}
const defaultProps = {
  series: [
    {
      data: [
        [1327359600000, 30],
        [1328137200000, 31],
        [1329260400000, 42],
        [1330470000000, 72],
        [1331679600000, 83],
        [1332885600000, 84],
        [1334095200000, 73],
        [1335996000000, 57],
        [1337292000000, 46],
        [1338847200000, 50],
        [1341957600000, 58],
        [1343253600000, 40],
        [1344808800000, 32],
        [1348696800000, 79],
        [1354748400000, 55],
        [1356908400000, 28],
        [1358809200000, 17],
        [1360796400000, 28],
        [1361919600000, 39],
      ],
    },
  ],
  options: {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 30,
    //       borderColor: '#999',
    //       label: {
    //         show: true,
    //         text: 'Support',
    //         style: {
    //           color: '#fff',
    //           background: '#00E396',
    //         },
    //       },
    //     },
    //   ],
    //   xaxis: [
    //     {
    //       x: new Date('14 Nov 2012').getTime(),
    //       borderColor: '#999',
    //       yAxisIndex: 0,
    //       label: {
    //         show: true,
    //         text: 'RALLy',
    //         style: {
    //           color: '#fff',
    //           background: '#775DD0',
    //         },
    //       },
    //     },
    //   ],
    // },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
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
  } as unknown as ApexOptions,
  selection: 'Yearly',
}

const AreaTotalSessions = ({
  options = defaultProps.options,
  series = defaultProps.series,
  selection = defaultProps.selection,
}: AreaTotalSessionsPropType) => {
  const [timeline, setTimeline] = useState(selection)
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
          new Date('28 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime()
        )
        break
      case 'Half Year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Sep 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        )
        break
      case 'Yearly':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Feb 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        )
        break
      case 'ALL':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('23 Jan 2012').getTime(),
          new Date('27 Feb 2013').getTime()
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
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  )
}

export default AreaTotalSessions

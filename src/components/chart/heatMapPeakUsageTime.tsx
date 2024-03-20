import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Divider } from 'components/common'
import { useTheme } from 'hooks'
import peakUsageData from 'mockup/peakUsage.json'

const generateData = (count: number, yrange: { min: number; max: number }) => {
  let i = 0
  const series = []
  while (i < count) {
    const x = (((i * 2) % 12) + 2).toString() + ':00' + 'AM'
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x: x,
      y: y,
    })
    i++
  }
  return series
}

function hexToRgb(hex: string) {
  // Remove # symbol if present
  hex = hex.replace(/^#/, '')

  // Parse hex string to RGB values
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}

function rgbToHex(r: number, g: number, b: number) {
  // Convert RGB values to hexadecimal color string
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function mixColors(color1: string, color2: string, x: number, y: number) {
  // Extract RGB values from color strings
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  // Average corresponding RGB values
  const avgRed = Math.round((rgb1.r * x + rgb2.r * y) / (x + y))
  const avgGreen = Math.round((rgb1.g * x + rgb2.g * y) / (x + y))
  const avgBlue = Math.round((rgb1.b * x + rgb2.b * y) / (x + y))

  // Convert averaged RGB values back to hex color
  const mixedColor = rgbToHex(avgRed, avgGreen, avgBlue)

  return mixedColor
}

const colorRange = (startColor: string, endColor: string, maxValue: number) => {
  let i = 0
  const series = []
  while (i <= maxValue) {
    const from = i
    const to = i + 1
    series.push({
      from: from,
      to: to,
      color: mixColors(startColor, endColor, i, maxValue - i),
    })
    i++
  }
  return series
}

const HeatmapPeakUsageTime = () => {
  const { themeColors } = useTheme()
  const range = colorRange(
    '#ff0000',
    themeColors.manifest?.yellow as string,
    100
  )
  const series = [
    {
      name: 'Sun',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Sat',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Fri',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Thu',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Wed',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Tue',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Mon',
      data: generateData(9, {
        min: 0,
        max: 90,
      }),
    },
  ]
  const options: ApexOptions = {
    chart: {
      height: 190,
      type: 'heatmap',
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [themeColors.manifest?.yellow, themeColors.manifest?.red],
    legend: {
      show: false,
    },
    plotOptions: {
      heatmap: {
        radius: 4,
        colorScale: {
          ranges: range,
          min: 0,
          max: 100,
        },
      },
    },
  }

  return (
    <div className="flex w-full flex-col">
      <div className="mb-[20px] flex w-full items-center justify-between pr-40">
        <h2 className="font-rubik text-[16px] font-medium">PEAK USAGE TIME</h2>
        <div className="flex items-center gap-4">
          <p
            className="font-rubik text-[10px] font-medium"
            style={{ color: themeColors.manifest?.gray }}
          >
            1
          </p>
          <div
            className="h-10 w-[100px] rounded-[10px] "
            style={{
              zIndex: 100,
              // background: `linear-gradient(to right, #ffff00, #ff0000)`,
              background: `linear-gradient(to right, ${themeColors.manifest?.yellow}, ${themeColors.manifest?.red})`,
            }}
          ></div>
          <p
            className="font-rubik text-[10px] font-medium"
            style={{ color: themeColors.manifest?.gray }}
          >
            100
          </p>
        </div>
      </div>
      <Divider />
      <div className="w-full">
        <ReactApexChart
          options={options}
          series={peakUsageData.series ?? series}
          type="heatmap"
          height={240}
        />
      </div>
    </div>
  )
}

export default HeatmapPeakUsageTime

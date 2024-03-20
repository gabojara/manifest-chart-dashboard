import { useState } from 'react'
import { Divider } from 'components/common'
import { Panel, Needle } from 'components/common/icons'
import { useTheme } from 'hooks'
import sentimentOverviewData from 'mockup/sentimentOverview.json'

interface LegendItemProps {
  color?: string
  textColor?: string
  grade?: string
}

const LegendItem = ({ color, textColor, grade }: LegendItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 2,
          backgroundColor: color,
        }}
      />
      <p
        className="font-rubik text-[12px]"
        style={{
          color: textColor,
        }}
      >
        {grade}
      </p>
    </div>
  )
}

interface TooltipPosition {
  x: number
  y: number
}

const DountUserSentimentOverview = () => {
  const { themeColors } = useTheme()
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    x: 0,
    y: 0,
  })
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  const toolTipBgColor = () => {
    return sentimentOverviewData.labels[
      Math.ceil(4 - sentimentOverviewData.value / 20)
    ].color
    // return '#ffff00'
  }

  const handleMouseMove = (event: React.MouseEvent<Element>) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="font-rubik text-[16px] font-medium">
        USER SENTIMENT OVERVIEW
      </h2>
      <Divider />
      <div className="relative flex w-full items-center p-16 py-24">
        <div className="relative w-fit">
          <Panel />
          <div
            className="absolute bottom-0 left-1/2 -translate-y-10"
            style={{
              width: 0,
              height: 0,
              transform: `rotate(${180 + sentimentOverviewData.value * 1.8}deg)`,
            }}
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Needle className="-translate-x-10 -translate-y-10" />
            </div>
          </div>
          {showTooltip && (
            <p
              style={{
                padding: 5,
                position: 'fixed',
                top: tooltipPosition.y - 30,
                left: tooltipPosition.x + 10,
                fontFamily: 'Rubik',
                fontWeight: '700',
                fontSize: 12,
                borderRadius: 4,
                backgroundColor: toolTipBgColor(),
              }}
            >
              score: {sentimentOverviewData.value}
            </p>
          )}
        </div>
        <div className="ml-20 flex flex-col justify-between gap-14">
          {sentimentOverviewData.labels.map((item, index) => (
            <LegendItem
              key={index}
              grade={item.grade}
              color={item.color}
              textColor={themeColors.manifest?.gray}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DountUserSentimentOverview

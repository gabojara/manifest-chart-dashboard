import { Divider } from 'components/common'
import AreaAnxietyScores from './areaAnxietyScores'
import AreaDepressionScores from './areaDepressionScores'
import AreaHelpfulness from './areaHelpfulness'
import AreaSatisfaction from './areaSatisfaction'
import { useTheme } from 'hooks'

const EfficacyMeasurements = () => {
  const { themeColors } = useTheme()

  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="font-rubik text-[16px] font-medium">
        EFFICACY MEASUREMENTS
      </h2>
      <Divider />
      <div className="grid w-full grid-cols-1 gap-[20px] tablet:grid-cols-2 desktop-s:grid-cols-1 desktop:grid-cols-2">
        <div
          className="w-full rounded-[8px] border-DEFAULT p-12"
          style={{
            borderWidth: '1px',
            backgroundColor: themeColors.manifest?.softYellow,
            borderColor: themeColors.stroke,
          }}
        >
          <AreaHelpfulness />
        </div>
        <div
          className="w-full rounded-[8px] border-DEFAULT p-12"
          style={{
            borderWidth: '1px',
            backgroundColor: themeColors.manifest?.softYellow,
            borderColor: themeColors.stroke,
          }}
        >
          <AreaSatisfaction />
        </div>
        <div
          className="w-full rounded-[8px] p-12"
          style={{
            borderWidth: '1px',
            backgroundColor: themeColors.manifest?.softYellow,
            borderColor: themeColors.stroke,
          }}
        >
          <AreaAnxietyScores />
        </div>
        <div
          className="w-full rounded-[8px] border-DEFAULT p-12"
          style={{
            borderWidth: '1px',
            backgroundColor: themeColors.manifest?.softYellow,
            borderColor: themeColors.stroke,
          }}
        >
          <AreaDepressionScores />
        </div>
      </div>
    </div>
  )
}

export default EfficacyMeasurements

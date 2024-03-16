import cx from 'classnames'
import PeakUsageTime from '../../assets/peak-usage-time.png'

interface Props {
  className?: string
}
const HeatmapPeakUsageTime = ({ className }: Props) => {
  return <img src={PeakUsageTime} className={cx(className)} alt="" />
}

export default HeatmapPeakUsageTime

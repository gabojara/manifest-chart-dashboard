import cx from 'classnames'
import EfficacyMeasurementsImage from '../../../assets/efficacy-measurements.png'

interface Props {
  className?: string
}
const EfficacyMeasurements = ({ className }: Props) => {
  return (
    <img src={EfficacyMeasurementsImage} className={cx(className)} alt="" />
  )
}

export default EfficacyMeasurements

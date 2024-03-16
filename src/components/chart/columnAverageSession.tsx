import cx from 'classnames'
import AverageSessions from '../../assets/average-sessions.png'

interface Props {
  className?: string
}
const ColumnAverageSession = ({ className }: Props) => {
  return <img className={cx(className)} src={AverageSessions} alt="" />
}

export default ColumnAverageSession

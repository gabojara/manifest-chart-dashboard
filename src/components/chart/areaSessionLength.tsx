import cx from 'classnames'
import SessionLength from '../../assets/session-length.png'

interface Props {
  className?: string
}
const AreaSessionLength = ({ className }: Props) => {
  return <img className={cx(className)} src={SessionLength} alt="" />
}

export default AreaSessionLength

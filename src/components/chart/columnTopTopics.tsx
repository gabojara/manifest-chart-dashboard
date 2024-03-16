import cx from 'classnames'
import TopTopics from '../../assets/top-discussed-topics.png'

interface Props {
  className?: string
}
const ColumnTopTopics = ({ className }: Props) => {
  return <img className={cx(className)} src={TopTopics} alt="" />
}

export default ColumnTopTopics

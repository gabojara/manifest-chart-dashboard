import cx from 'classnames'
import UserSentimentOverview from '../../assets/user-sentiment-overview.png'

interface Props {
  className?: string
}
const DountUserSentimentOverview = ({ className }: Props) => {
  return <img className={cx(className)} src={UserSentimentOverview} alt="" />
}

export default DountUserSentimentOverview

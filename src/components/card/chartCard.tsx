import cx from 'classnames'

interface Props {
  children: JSX.Element
  className?: string
}

const ChartCard = ({ children, className }: Props) => {
  return (
    <div
      className={cx(
        'flex w-full items-center justify-center rounded-[16px] bg-white p-[20px] shadow-sdSoft hover:shadow-[#2F313544]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default ChartCard

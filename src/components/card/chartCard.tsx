interface Props {
  children: JSX.Element
}

const ChartCard = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center p-[20px] opacity-15 shadow-md">
      {children}
    </div>
  )
}

export default ChartCard

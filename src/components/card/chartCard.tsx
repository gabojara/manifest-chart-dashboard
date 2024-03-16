interface Props {
  children: JSX.Element
}

const ChartCard = ({ children }: Props) => {
  return (
    <div className="flex w-full items-center justify-center p-[20px] shadow-sdSoft">
      {children}
    </div>
  )
}

export default ChartCard
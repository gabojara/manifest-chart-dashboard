interface BarPropType {
  title: string
  value: number
  color: string
}

const Bar = (props: BarPropType) => {
  return (
    <div className="flex w-full items-center gap-[20px]">
      <h2 className="w-[110px] font-rubik text-[15px] text-gray-700">
        {props.title}
      </h2>
      <div className="h-16 flex-1 rounded-md bg-gray-300">
        <div
          style={{
            width: props.value + '%',
            height: '16px',
            borderRadius: '6px',
            backgroundColor: props.color,
          }}
        />
      </div>
      <h2 className="w-40 font-rubik text-[16px] text-gray-700">
        {`${props.value}%`}
      </h2>
    </div>
  )
}

const gradeData = [
  { title: 'High School', value: 30, color: '#79D257' },
  { title: 'College', value: 50, color: '#6EB6F4' },
  { title: 'Graduate', value: 20, color: '#F28E50' },
]

const Grade = () => {
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="w-[110px] font-rubik text-[24px] font-bold text-gray-700">
        Grade
      </h2>
      <div className="h-px w-full bg-gray-700" />
      <div className="flex flex-col gap-20">
        {gradeData.map((item, index) => {
          return <Bar key={index} {...item} />
        })}
      </div>
    </div>
  )
}

export default Grade

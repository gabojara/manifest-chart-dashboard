import Divider from '../common/divider'
interface BarPropType {
  title: string
  value: number
  color: string
}

const Bar = (props: BarPropType) => {
  return (
    <div className="flex w-full justify-center gap-[20px]">
      <h2 className="w-[110px] font-rubik text-[15px] font-medium text-[#6F7274]">
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
      <h2 className="w-40 font-rubik text-[16px] text-[#6F7274]">
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
      <h2 className="font-rubik text-[16px] font-medium">Grade</h2>
      <Divider />
      <div className="flex flex-col gap-[20px]">
        {gradeData.map((item, index) => {
          return <Bar key={index} {...item} />
        })}
      </div>
    </div>
  )
}

export default Grade

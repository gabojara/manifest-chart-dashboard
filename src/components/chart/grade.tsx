import Divider from 'components/common/divider'
import gradeData from 'mockup/grade.json'

interface BarPropType {
  title: string
  value: number
  color: string
}

const Bar = (props: BarPropType) => {
  return (
    <div className="flex w-full items-center justify-center gap-[20px]">
      <h2 className="w-[110px] font-rubik text-[15px] font-medium text-[#6F7274]">
        {props.title}
      </h2>
      <div className="h-[18px] flex-1 rounded-md bg-gray-300">
        <div
          style={{
            width: props.value + '%',
            height: '18px',
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

const Grade = () => {
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="font-rubik text-[16px] font-medium">GRADE</h2>
      <Divider />
      <div className="flex flex-col gap-[20px] pt-10">
        {gradeData.grade.map((item, index) => {
          return <Bar key={index} {...item} />
        })}
      </div>
    </div>
  )
}

export default Grade

import Divider from 'components/common/divider'

const ActiveStudents = () => {
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <h2 className="font-rubik text-[16px] font-medium">Active Students</h2>
      <Divider />
      <div className="flex">
        <div className="w-1/2">
          <h3 className="p-0 font-rubik text-[40px] font-semibold leading-none">
            120
          </h3>
          <p className="font-rubik text-[14px]">Last 7 Days</p>
        </div>
        <div className="w-1/2">
          <h3 className="p-0 font-rubik text-[40px] font-semibold leading-none">
            1000
          </h3>
          <p className="font-rubik text-[14px]">Last 30 Days</p>
        </div>
      </div>
    </div>
  )
}

export default ActiveStudents

import { AlarmIcon } from '../common/icons/alarm.svg'
import { BurgerIcon } from '../common/icons/burger.svg'
import { ChatIcon } from '../common/icons/chat.svg'

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between bg-white px-[30px] py-16 shadow-sdSoft">
      <div className="flex items-center gap-24">
        <BurgerIcon className="cursor-pointer" />
        <span className="font-rubik text-[32px] font-extrabold uppercase">
          Manifest
        </span>
        <div className="h-[47px] w-[466px] rounded-[8px] border border-[#D1D5DB] bg-[#FFFDF4]"></div>
      </div>
      <div className="flex items-center gap-24">
        <ChatIcon className="cursor-pointer" />
        <AlarmIcon className="cursor-pointer" />
        <span className="size-[43px] cursor-pointer rounded-[43px] bg-[#D5DAE1]" />
      </div>
    </div>
  )
}

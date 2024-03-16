import { AlarmIcon } from '../common/icons/alarm.svg'
import { BurgerIcon } from '../common/icons/burger.svg'
import { ChatIcon } from '../common/icons/chat.svg'
import { SearchIcon } from '../common/icons/search.svg'
import UserAvatar from '../../assets/user-photo.png'
export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between bg-white px-[30px] py-16 shadow-sdSoft">
      <div className="flex items-center gap-24">
        <BurgerIcon className="cursor-pointer" />
        <span className="font-rubik text-[32px] font-extrabold uppercase">
          Manifest
        </span>
        <div className="hidden w-[250px] items-center gap-8 rounded-[8px] border border-[#D1D5DB] bg-[#FFFDF4] px-16 py-12 tablet:flex tablet:w-[350px] desktop-s:w-[450px]">
          <SearchIcon />
          <input className="w-full bg-transparent text-[15px] leading-[150%] outline-none focus:outline-none" />
        </div>
      </div>
      <div className="flex items-center gap-24">
        <SearchIcon
          height={20}
          width={20}
          className="inline cursor-pointer tablet:hidden"
        />
        <ChatIcon className="cursor-pointer" isBadged />
        <AlarmIcon className="cursor-pointer" isBadged />
        <img
          src={UserAvatar}
          alt="user-avatar"
          className="size-[43px] cursor-pointer rounded-[48px]"
        />
      </div>
    </div>
  )
}

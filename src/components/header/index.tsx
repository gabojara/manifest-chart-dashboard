import cx from 'classnames'
import { AlarmIcon } from 'components/common/icons/alarm.svg'
import { BurgerIcon } from 'components/common/icons/burger.svg'
import { ChatIcon } from 'components/common/icons/chat.svg'
import { SearchIcon } from 'components/common/icons/search.svg'
import UserAvatar from '../../assets/user-photo.png'

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <div
      className={cx(
        'flex w-full items-center justify-between bg-white px-12 mobile:px-24 tablet:px-32  py-16 shadow-header',
        className
      )}
    >
      <div className="flex items-center gap-12 mobile:gap-24">
        <BurgerIcon className="cursor-pointer" />
        <span className="font-rubik text-[32px] font-extrabold uppercase">
          Manifest
        </span>
        <div className="relative z-[9999] hidden w-[250px] items-center gap-8 rounded-[8px] border border-[#D1D5DB] bg-[#FFFDF4] px-16 py-12 opacity-100 tablet:flex tablet:w-[350px] desktop-s:w-[450px]">
          <SearchIcon />
          <input className="w-full bg-transparent text-[15px] leading-[150%] outline-none focus:outline-none" />
        </div>
      </div>
      <div className="flex items-center gap-12 mobile:gap-24">
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
          className="size-32 cursor-pointer rounded-[48px] mobile:size-40"
        />
      </div>
    </div>
  )
}

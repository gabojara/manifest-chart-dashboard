import cx from 'classnames'
import { useState } from 'react'
import { EyeIcon } from '../components/common/icons/eye.svg'
import { Footer } from '../components/footer'

export const Login = () => {
  const [isEyeOpen, toggleEye] = useState(false)
  return (
    <div className="flex h-screen w-screen items-center justify-center px-16 tablet:px-0">
      <span className="fixed left-0 top-0 h-screen w-screen bg-login bg-cover" />
      <div className="relative flex w-[566px] flex-col items-center gap-40 rounded-[40px] bg-white p-[60px]">
        <span className="text-[60px] font-[800] uppercase leading-[100%] text-[#242328]">
          Manifest
        </span>
        <span className="text-[32px] font-[500] leading-[120%] text-[#000000]">
          Login
        </span>
        <div className="flex w-full flex-col gap-[30px]">
          <div className="w-full rounded-[10px] border border-[#000000]/20 bg-[#F4F7F9] px-24 py-16">
            <input
              placeholder="Email address"
              className="w-full flex-1 bg-transparent text-[20px] leading-[120%] text-[#8F8F8F] outline-none focus:outline-none"
            />
          </div>
          <div className="flex w-full justify-between rounded-[10px] border border-[#000000]/20 bg-[#F4F7F9] px-24 py-16">
            <input
              type={!isEyeOpen ? 'password' : 'text'}
              placeholder="Password"
              className="flex-1 bg-transparent text-[20px] leading-[120%] text-[#8F8F8F] outline-none focus:outline-none"
            />
            <div onClick={() => toggleEye((p) => !p)}>
              <EyeIcon
                className={cx(isEyeOpen ? 'text-[#4CA7ED]' : 'text-[#8F8F8F]')}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div className="flex gap-8">
              <input
                type="checkbox"
                className="border border-[#000000]/20 bg-[#F4F7F9]"
              />
              <span className="text-[18px] leading-[14px]">Remember me</span>
            </div>
            <span className="cursor-pointer text-[18px] leading-[14px] text-[#4CA7ED] hover:text-blue-500">
              Forgot password?
            </span>
          </div>
        </div>

        <button className="w-full rounded-[10px] bg-[#4CA7ED] py-12 text-[16px] uppercase text-white hover:bg-blue-500">
          Login
        </button>
        <div className="text-[15px]">
          Don&apos;t have an account?{' '}
          <span className="cursor-pointer text-[#4CA7ED] hover:text-blue-500">
            Create account
          </span>
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </div>
  )
}

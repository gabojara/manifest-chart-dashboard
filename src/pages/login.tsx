/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'
import { EyeIcon } from '../components/common/icons/eye.svg'
import { Footer } from '../components/footer'

export const Login = () => {
  const [isEyeOpen, toggleEye] = useState(false)
  const navigate = useNavigate()
  const handleLogin = () => navigate('/dashboard')

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-x-hidden px-16 tablet:px-0">
      <span className="fixed left-0 top-0 h-screen w-screen bg-login bg-cover" />
      <div className="relative flex w-full flex-col items-center gap-32 rounded-[32px] bg-white px-24 py-[60px] shadow-sdSoft mobile:w-[480px] mobile:px-40 tablet:w-[560px] tablet:gap-40 tablet:rounded-[40px] tablet:p-[60px]">
        <span className="font-rubik text-[48px] font-extrabold uppercase leading-[100%] text-[#242328] mobile:text-[54px] tablet:text-[60px]">
          Manifest
        </span>
        <span className="font-rubik text-[28px] font-medium leading-[120%] text-[#000000] mobile:text-[30px] tablet:text-[32px]">
          Login
        </span>
        <div className="flex w-full flex-col gap-24 mobile:gap-[30px]">
          <div className="w-full rounded-[10px] border border-[#000000]/20 bg-[#F4F7F9] px-24 py-16">
            <input
              placeholder="Email address"
              className="w-full flex-1 bg-transparent text-[18px] leading-[120%] text-[#111827] placeholder-[#8F8F8F] outline-none focus:outline-none mobile:text-[20px]"
            />
          </div>
          <div className="flex w-full justify-between rounded-[10px] border border-[#000000]/20 bg-[#F4F7F9] px-24 py-16">
            <input
              type={!isEyeOpen ? 'password' : 'text'}
              placeholder="Password"
              className="w-full bg-transparent text-[18px] leading-[120%] text-[#111827] placeholder-[#8F8F8F] outline-none focus:outline-none mobile:text-[20px]"
            />
            <div onClick={() => toggleEye((p) => !p)}>
              <EyeIcon
                className={cx(isEyeOpen ? 'text-[#4CA7ED]' : 'text-[#8F8F8F]')}
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-8 px-4 mobile:flex-row">
            <div className="flex items-center gap-8 self-start mobile:self-center">
              <input
                type="checkbox"
                className="size-16 rounded-[4px] border border-[#000000]/20 bg-[#F4F7F9]"
              />
              <span className="font-rubik text-[18px] leading-[14px] text-[#111827]">
                Remember me
              </span>
            </div>
            <span className="cursor-pointer self-end font-rubik text-[18px] leading-[14px] text-[#4CA7ED] hover:text-blue-500 mobile:self-center">
              Forgot password?
            </span>
          </div>
        </div>
        <button
          className="w-full rounded-[10px] bg-[#4CA7ED] py-12 text-[16px] uppercase text-white hover:bg-blue-500"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="text-center font-rubik text-[15px]">
          Don&apos;t have an account?{' '}
          <span className="inline-block cursor-pointer text-[#4CA7ED] hover:text-blue-500">
            Create account
          </span>
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </div>
  )
}

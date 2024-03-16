export const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <span className="fixed left-0 top-0 h-screen w-screen bg-login bg-cover" />
      <div className="relative flex h-[638px] w-[566px] flex-col items-center gap-[40px] rounded-[40px] bg-white p-[60px]">
        <span className="text-[60px] font-[800] uppercase leading-[100%] text-[#242328]">
          Manifest
        </span>
        <span className="text-[32px] font-[500] leading-[120%] text-[#000000]">
          Login
        </span>
        <input className="w-full" value="Email address" />
      </div>
    </div>
  )
}

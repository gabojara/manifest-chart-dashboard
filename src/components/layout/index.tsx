import { Footer } from '../footer'
import { Header } from '../header'

interface Props {
  children: JSX.Element
}
export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header className="fixed top-0 z-[999] opacity-90" />
      {children}
      <Footer className="fixed bottom-0 z-[999] opacity-90" />
    </div>
  )
}

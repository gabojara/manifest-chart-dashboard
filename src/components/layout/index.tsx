import { Footer } from '../footer'
import { Header } from '../header'

interface Props {
  children: JSX.Element
}
export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

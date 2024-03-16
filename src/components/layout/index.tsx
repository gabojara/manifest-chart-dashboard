import { Footer } from '../footer'
import { Header } from '../header'

interface Props {
  children: JSX.Element
}
export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

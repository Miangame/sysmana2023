import Navbar from '../Navbar/Navbar';
import { LayoutWrapper } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}

export default Layout

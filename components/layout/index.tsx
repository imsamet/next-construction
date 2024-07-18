import { ReactNode } from 'react';
import Nav from '../navigation';

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      {/* <Footer/> */}
    </>
  );
};
export default Layout;

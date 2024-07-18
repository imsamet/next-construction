import { ReactNode } from 'react';
import Nav from '../navigation';
import Footer from '../footer';
import { useSelector } from '@/hooks/useRedux';
import Loading from '../loading';

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  const { isLoading } = useSelector(state => state.app);
  return (
    <>
      {isLoading && <Loading />}
      <Nav />
      {children}
      <Footer />
    </>
  );
};
export default Layout;

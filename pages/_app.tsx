import Layout from '@/components/layout';
import '@/styles/global.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

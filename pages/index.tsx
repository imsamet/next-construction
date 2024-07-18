import About from '@/modules/about';
import Contact from '@/modules/contact';
import Header from '@/modules/header';
import Projects from '@/modules/projects';
import Slider from '@/modules/slider';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const hashIndex = url.indexOf('#');
      if (hashIndex !== -1) {
        const hash = url.substring(hashIndex + 1);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>Anasayfa | Metcon</title>
        <meta
          name="description"
          content="METCON Firması sektörde yaklaşık 20 yıllık tecrübeli yönetim kadrosuyla, montaj ve imalat faaliyetlerinde kaliteli ve müşteri odaklı hizmeti ilke edinen Endüstriyel bir firmadır."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

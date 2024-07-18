import About from '@/modules/about';
import Contact from '@/modules/contact';
import Header from '@/modules/header';
import Projects from '@/modules/projects';
import Slider from '@/modules/slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Metcon | &copy;</title>
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

import About from '@/modules/about';
import Contact from '@/modules/contact';
import Header from '@/modules/header';
import Projects from '@/modules/projects';
import Slider from '@/modules/slider';

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

import cn from 'classnames';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliders } from '@/constants/slider';
import Image from 'next/image';
import Icons from '@/components/icons';

const Slider: React.FC = () => {
  return (
    <section className={cn('section', styles.section)}>
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <span className={styles.title}>
            Lorem suspendisse viverra lacinia mauris eget tempor sapien varius venenatis.
          </span>
          <Icons name="ArrowUpRight" size={48} />
        </div>
        <p className={cn('paragraph', styles.description)}>
          Pellentesque congue ipsum nec velit mattis bibendum. Curabitur porttitor nunc quis urna faucibus suscipit a
          sit amet justo. Vivamus fermentum, lorem sed ultricies bibendum, odio nibh porttitor orci, at egestas elit
          lectus et augue. Nullam in tincidunt libero. Praesent at hendrerit ante, a tincidunt ligula. Morbi in dui ac
          quam laoreet semper. Maecenas eu odio in ante sodales ultricies ac eu arcu. Vestibulum quis nisi est. Proin
          elementum justo ut gravida accumsan. Sed efficitur iaculis magna sit amet consequat.
        </p>
      </div>
      <div className={styles.swipper}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {sliders.map((i, key) => (
            <SwiperSlide key={key}>
              <div style={{ position: 'relative', width: 'auto', height: '500px' }}>
                <Image src={i.src} alt={i.alt} layout="fill" objectFit="cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

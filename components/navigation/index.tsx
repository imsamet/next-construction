import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import Icons from '../icons';
import { nav } from '@/constants/nav';

const Nav: React.FC = ({}) => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.container}>
          <Link href="/#header">
            <Image src="/logo.png" width={75} height={46} alt="metcon logo" />
          </Link>
          <div className={styles.linkBox}>
            {nav.links.map((i, key) => (
              <Link key={key} href={i.href} className={styles.link}>
                {i.title.toLocaleUpperCase('tr-TR')}
              </Link>
            ))}
          </div>
          <div className={styles.socialBox}>
            {nav.social.map((i, key) => (
              <Link key={key} href={i.href} className={styles.link} target="_blank">
                <Icons name={i.icon} size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

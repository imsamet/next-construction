import { nav } from '@/constants/nav';
import styles from './styles.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className={styles.logo}>METCON</span>
            <h3 className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque venenatis magna libero
            </h3>
            <hr className={styles.border} />
            <div className={styles.linkBox}>
              {nav.links.map((i, key) => (
                <Link href={i.href} className={styles.link}>
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-12">
            <p className={styles.copyrightText}>
              METCON | Copyright &copy; | {new Date().getFullYear()} All Rights revested
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
const Nav: React.FC = ({}) => {
  return (
    <nav>
      <div className="container">
        <div className={styles.container}>
          <Link href="/">
            <Image src="/logo.png" width={75} height={46} alt="metcon logo" />
          </Link>
          <div className={styles.linkBox}>
            <Link href="#" className={styles.link}>
              Home
            </Link>
            <Link href="#" className={styles.link}>
              About Us
            </Link>
            <Link href="#" className={styles.link}>
              Projects
            </Link>
            <Link href="#" className={styles.link}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

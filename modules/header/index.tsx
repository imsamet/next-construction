import cn from 'classnames';
import styles from './styles.module.scss';
import Button from '@/components/button';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className={cn('row', styles.container)}>
          <div className="col-md-8">
            <h1 className={styles.title}>Lorem ipsum consectetur adipiscing pellentesque</h1>
          </div>
          <div className="col-md-4">
            <div className={styles.card}>
              <hr className={styles.border} />
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in odio elit. Aenean sit amet egestas
                lorem. Cras at tellus pellentesque, cursus nisl a, rutrum metus. Integer mollis mi vel fringilla mollis.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <Button label="İletişime Geç" />
        </div>
      </div>
    </header>
  );
};
export default Header;

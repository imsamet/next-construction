import cn from 'classnames';
import Button from '@/components/button';
import styles from './styles.module.scss';

const About: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row between">
          <div className="col-md-12 col-lg-5">
            <h2 className={styles.title}>
              Fusce ipsum erat, placerat sed mi ac, venenatis sagittis odio. Aliquam erat nibh, tristique a dignissim
              non, aliquet pretium risus.
            </h2>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className={styles.card}>
              <p className={cn('paragraph', styles.paragraph)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in odio elit. Aenean sit amet egestas
                lorem. Cras at tellus pellentesque, cursus nisl a, rutrum metus. Integer mollis mi vel fringilla mollis.
                Proin et nibh non est pretium fringilla nec nec nisi.
              </p>
              <Button label="Diğer işler" type="tertiary" className={styles.button} />
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={styles.skillCard}>
              <span className={styles.skillTitle}>İş Ortağı</span>
              <span className={styles.skillValue}>150</span>
              <p className={cn('paragraph', styles.skillDescription)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={styles.skillCard}>
              <span className={styles.skillTitle}>Deneyim</span>
              <span className={styles.skillValue}>11,5</span>
              <p className={cn('paragraph', styles.skillDescription)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={styles.skillCard}>
              <span className={styles.skillTitle}>Toplam Proje</span>
              <span className={styles.skillValue}>450+</span>
              <p className={cn('paragraph', styles.skillDescription)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

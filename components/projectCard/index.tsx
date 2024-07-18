import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  src: string;
  title: string;
  description: string;
};
const ProjectCard: React.FC<Props> = ({ src, title, description }) => {
  return (
    <div style={{ backgroundImage: `url('${src}')` }} className={styles.container}>
      <div className={styles.card}>
        <div className={styles.textBox}>
          <span className={styles.title}>{title}</span>
          <span className={cn('paragraph', styles.description)}>{description}</span>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

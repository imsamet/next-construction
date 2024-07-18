import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  title: string;
  description?: string;
};
const SectionHead: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {!!description && <p className={cn('paragraph', styles.description)}>{description}</p>}
    </div>
  );
};
export default SectionHead;

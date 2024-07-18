import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
};
const Textarea: React.FC<Props> = ({ ...props }) => {
  return <textarea className={styles.input} {...props} />;
};
export default Textarea;

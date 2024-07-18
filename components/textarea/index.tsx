import { ChangeEventHandler } from 'react';
import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
const Textarea: React.FC<Props> = ({ ...props }) => {
  return <textarea className={styles.input} {...props} />;
};
export default Textarea;

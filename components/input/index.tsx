import { HTMLInputTypeAttribute } from 'react';
import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};
const Input: React.FC<Props> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};
export default Input;

import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  label: string;
  type?: 'primary' | 'secondary';
};
const Button: React.FC<Props> = ({ label, type = 'primary' }) => {
  return <button className={cn(styles.container, styles[type])}>{label}</button>;
};
export default Button;

import cn from 'classnames';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

type Props = {
  label: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children?: ReactNode;
};
const Button: React.FC<Props> = ({ label, type = 'primary', className, children }) => {
  return (
    <button className={cn(styles.container, styles[type], className)}>
      {label}
      {!!children && children}
    </button>
  );
};
export default Button;

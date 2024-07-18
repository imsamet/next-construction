import cn from 'classnames';
import styles from './styles.module.scss';
import { ReactNode } from 'react';

type Props = {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children?: ReactNode;
};
const Button: React.FC<Props> = ({ label, type, buttonType = 'primary', className, children }) => {
  return (
    <button type={type} className={cn(styles.container, styles[buttonType], className)}>
      {label}
      {!!children && children}
    </button>
  );
};
export default Button;

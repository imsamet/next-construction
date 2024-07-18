import cn from 'classnames';
import styles from './styles.module.scss';
import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  href?: string;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children?: ReactNode;
};
const Button: React.FC<Props> = ({ label, type, href, onClick, buttonType = 'primary', className, children }) => {
  const baseButton = (
    <button onClick={onClick} type={type} className={cn(styles.container, styles[buttonType], className)}>
      {label}
      {!!children && children}
    </button>
  );
  return href ? <Link href={href}>{baseButton}</Link> : baseButton;
};
export default Button;



import * as AllIcons from './components';
import {IconProps} from './_model';
const Icons: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  switch (name) {
    case 'ArrowUpRight':
      return <AllIcons.ArrowUpRight width={size} height={size} {...props} />;
    case 'Facebook':
      return <AllIcons.Facebook width={size} height={size} {...props} />;
    case 'Linkedin':
      return <AllIcons.Linkedin width={size} height={size} {...props} />;
    case 'Whatsapp':
      return <AllIcons.Whatsapp width={size} height={size} {...props} />;
    default:
      return null;
  }
};

export default Icons;

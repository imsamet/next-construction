import { IconTypes } from '@/components/icons/_model';

type NavType = {
  links: { href: string; title: string }[];
  social: { href: string; icon: IconTypes }[];
};
export const nav: NavType = {
  links: [
    { href: '#', title: 'Anasayfa' },
    { href: '#', title: 'Hakkımızda' },
    { href: '#', title: 'Projeler' },
    { href: '#', title: 'İletişim' },
  ],
  social: [
    { href: '#', icon: 'Linkedin' },
    { href: '#', icon: 'Facebook' },
  ],
};

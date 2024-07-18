import { IconTypes } from '@/components/icons/_model';

type NavType = {
  links: { href: string; title: string }[];
  social: { href: string; icon: IconTypes }[];
};
export const nav: NavType = {
  links: [
    { href: '/#header', title: 'Anasayfa' },
    { href: '/#about', title: 'Hakkımızda' },
    { href: '/#projects', title: 'Projeler' },
    { href: '/#contact', title: 'İletişim' },
  ],
  social: [
    { href: 'https://linkedin.com/', icon: 'Linkedin' },
    { href: 'https://facebook.com/', icon: 'Facebook' },
  ],
};

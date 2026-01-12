'use client';

import Image from 'next/image';
import Logo from '../../public/crowhub-logo.png';
import Link from 'next/link';
import { navItemsType } from '@/types/navItems.types';
import StyledButton from '@/components/ui/StyledButton';

const navItems: navItemsType[] = [
  {
    name: 'Projects',
    href: './projects',
  },
  {
    name: 'About',
    href: './about',
  },
  {
    name: 'Contact',
    href: './contact',
  },
];
const Navbar = () => {
  return (
    <div className="absolute flex w-full items-center justify-center">
      <nav className="font-inter-tight sticky z-50 mt-9 flex w-5/6 items-center justify-between px-5 py-2 font-medium">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} width={45} alt="Crowhub Logo" />
          </Link>
        </div>
        <ul className="flex items-center gap-7">
          {navItems.map((item: navItemsType, index: number) => {
            return (
              <li key={index}>
                <Link href={item.href} className="text-primary-foreground">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <StyledButton buttonText="Get Started" buttonLink="./login" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

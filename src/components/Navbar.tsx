'use client';

import Image from 'next/image';
import Logo from '../../public/crowhub-logo.png';
import Link from 'next/link';
import { navItemsType } from '@/types/navItems.types';

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
    <div className="mx-20">
      <nav className="sticky z-50 mt-9 flex w-full items-center justify-between border bg-transparent">
        <div className="logo my-2">
          <Link href="/">
            <Image src={Logo} width={45} alt="Crowhub Logo" />
          </Link>
        </div>
        <ul className="flex items-center gap-7">
          {navItems.map((item: navItemsType, index: number) => {
            return (
              <li key={index}>
                <Link href={item.href} className="">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Link href="./login" className="rounded-lg border border-gray-200">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

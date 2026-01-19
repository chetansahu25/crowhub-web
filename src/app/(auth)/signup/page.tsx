'use client';

import Image from 'next/image';
import EmailForm from './EmailForm';
import PasswordField from './PasswordField';

const Signup = () => {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#06040e]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/crow-hero.png"
          alt="Atmospheric background"
          fill
          priority
          quality={100}
          className="scale-93 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />
      </div>

      <PasswordField />
    </main>
  );
};

export default Signup;

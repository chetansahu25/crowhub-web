import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="h-full w-full">
      <header className="">
        <Navbar />
        <HeroSection />
      </header>
      <Link href={'/login'}>login</Link>
      <Link href={'/signup'}>Signup</Link>
    </main>
  );
};

export default Home;

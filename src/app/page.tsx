import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Link href={'/login'}>login</Link>
      <Link href={'/signup'}>Signup</Link>
    </div>
  );
};

export default Home;

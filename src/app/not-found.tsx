'use client';
import Link from 'next/link';
import { BirdhouseIcon, RotateCwIcon } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  function handleRefresh() {
    window.location.reload();
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-gray-100">
      <h1 className="font-poppins text-center text-5xl font-semibold">
        {' '}
        404: Page not found!
      </h1>
      <span className="font-poppins text-lg font-medium text-gray-500">
        (We blame the intern)
      </span>
      {/* <video src="/not-found-files/not-found.mp4"
      autoPlay={true}
      muted
      //controls
      className=" mix-blend-multiply md:w-2/5 rotate-y-180">
      </video> */}

      <Image
        src="/not-found-assets/blaming-intern.png"
        alt="crow blaming intern"
        width={1000}
        height={1000}
        className="w-2/5 mix-blend-darken"
      />

      <div className="flex gap-5 py-5">
        <button
          id="retryButton"
          onClick={handleRefresh}
          className="flex items-center justify-center gap-2 rounded-full border border-black bg-white px-5 py-2 font-semibold"
        >
          <RotateCwIcon size={20} />
          Refresh Page
        </button>

        <Link
          href="/"
          className="bg-primary text-primary-foreground flex items-center justify-center gap-2 rounded-full border px-5 py-2 font-semibold"
        >
          <BirdhouseIcon size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}

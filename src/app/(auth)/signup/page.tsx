'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; // 1. Import next/image
import Link from 'next/link';

const Signup = () => {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#06040e]">
      {/* --- LAYER 1: Optimized Background Image --- 
          - priority: Preloads image (Essential for LCP)
          - fill: absolute positioning to cover parent
          - sizes: serves smaller images to mobile devices
      */}
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
        {/* --- LAYER 2: The Gradient Overlay (Replaces your CSS gradient) --- 
            This is more performant than mixing it in the BG property 
        */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />
      </div>

      {/* --- LAYER 3: The Content --- */}
      <div className="relative z-10 w-126 p-4">
        {' '}
        {/* Added container constraint for better mobile handling */}
        <div className="flex flex-col items-center justify-center rounded-[24px] border border-white/5 bg-black/50 p-8 backdrop-blur-sm md:p-16">
          {/* Header Section */}
          <div className="flex w-full flex-col justify-start text-center md:text-left">
            <h1 className="font-lato text-3xl font-semibold tracking-tight text-white md:text-[32px]">
              Set up your account 🙋‍♂️
            </h1>
            <span className="font-lato mt-2 text-[16px] text-[#8D87A8]">
              Already have an account? &nbsp;
              <Link
                href={'/login'}
                className="text-primary-gradient transition-colors hover:text-white"
              >
                Login
              </Link>
            </span>
          </div>

          {/* Form Section */}
          <div className="w-full pt-8 text-white">
            <form>
              <FieldGroup>
                <FieldSet>
                  {' '}
                  {/* Added spacing utility */}
                  {/* Field: Email */}
                  <Field>
                    <FieldLabel
                      htmlFor="email"
                      className="font-lato font-semibold"
                    >
                      Enter Email
                    </FieldLabel>
                    <Input
                      id="email" // Fixed ID
                      name="email"
                      placeholder="E.g. johndoe@example.com"
                      type="email" // Changed to type="email" for mobile keyboard optimization
                      autoComplete="email"
                      className="font-lato w-full rounded-lg border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-white transition-all placeholder:text-[#565073] focus:border-transparent focus:ring-2 focus:ring-[#C28CFF]"
                    />
                  </Field>
                  {/* Field: Username */}
                  <Field>
                    <FieldLabel
                      htmlFor="username"
                      className="font-lato font-semibold"
                    >
                      Set Username
                    </FieldLabel>
                    <Input
                      id="username" // Fixed ID
                      name="username"
                      placeholder="E.g. Crow_01"
                      type="text"
                      autoComplete="username"
                      className="font-lato w-full rounded-lg border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-white transition-all placeholder:text-[#565073] focus:border-transparent focus:ring-2 focus:ring-[#C28CFF]"
                    />
                  </Field>
                  <Button
                    type="submit"
                    className="font-lato mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#C28CFF] to-[#4845FE] px-6 py-6 text-[20px] font-bold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                  >
                    Next <ArrowRight strokeWidth={3} className="h-5 w-5" />
                  </Button>
                </FieldSet>
              </FieldGroup>
            </form>
          </div>

          {/* Footer / Legal */}
          <div className="mt-12 w-full max-w-[90%] text-center">
            <span className="font-lato text-[14px] leading-relaxed font-semibold text-[#565073]">
              By continuing, you agree to our <br />
              <Link
                href="#"
                className="underline decoration-dotted transition-colors hover:text-[#C28CFF]"
              >
                Terms of Service
              </Link>
              ,&nbsp;
              <Link
                href="#"
                className="underline decoration-dotted transition-colors hover:text-[#C28CFF]"
              >
                Privacy Policy
              </Link>
              &nbsp;& &nbsp;
              <Link
                href="#"
                className="underline decoration-dotted transition-colors hover:text-[#C28CFF]"
              >
                Content Policy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

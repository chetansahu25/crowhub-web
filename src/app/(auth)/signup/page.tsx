'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Signup = () => {
  return (
    <div className="bg-[#06040e]">
      <div className="flex h-screen scale-100 items-center justify-center border-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/crow-hero.png)] bg-cover bg-center backdrop-brightness-75">
        <div className="flex flex-col items-center justify-center rounded-[24px] bg-[#06040e]/50 p-16 backdrop-blur-sm *:w-95">
          {/* 1st column */}
          <div className="flex flex-col justify-start">
            <h1 className="font-lato text-3xl font-semibold tracking-tight text-white md:text-[32px]">
              Set up your account 🙋‍♂️
            </h1>
            <span className="text-[#565073]">
              Already have an account? &nbsp;
              <Link href={'/login'} className="text-primary-gradient">
                Login
              </Link>
            </span>
          </div>
          <div className="w-full pt-8 text-white">
            <form action="">
              <FieldGroup>
                <FieldSet>
                  <Field>
                    <FieldLabel
                      htmlFor="unique-identifier"
                      className="font-lato font-semibold"
                    >
                      Enter Email
                    </FieldLabel>
                    <Input
                      id="unique-identifier"
                      placeholder="E.g. johndoe@example.com"
                      type="text"
                      className="font-lato border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-[#565073] backdrop-blur-xs placeholder:text-[#565073]"
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      htmlFor="unique-identifier"
                      className="font-lato font-semibold"
                    >
                      Set Username
                    </FieldLabel>
                    <Input
                      id="unique-identifier"
                      placeholder="E.g. Crow_01"
                      type="text"
                      className="font-lato border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-[#565073] backdrop-blur-xs placeholder:text-[#565073]"
                    />
                  </Field>
                  <Button
                    type="submit"
                    className="font-lato mt-6 cursor-pointer gap-2 rounded-full bg-linear-to-r from-[#C28CFF] to-[#4845FE] px-6 py-6 text-[20px] font-bold text-white hover:scale-105"
                  >
                    Next <ArrowRight strokeWidth={3} />
                  </Button>
                </FieldSet>
              </FieldGroup>
            </form>
          </div>
          <div className="mt-20 w-90.25 text-center">
            <span className="font-lato text-[14px] font-semibold text-[#565073] *:underline *:decoration-dotted">
              By continuing, you agree to our <br />
              <Link href={'#'}>Terms of Service,</Link>
              &nbsp;
              <Link href={'#'}>Privacy Policy</Link>
              &nbsp; & &nbsp;
              <Link href={'#'}>Content Policy</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

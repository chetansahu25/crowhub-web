'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import LoginBg from '../../../../public/login-bg.png';
import EyeClosed from '../../../../public/svgs/eye-closed.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { EyeIcon } from 'lucide-react';
import { set } from 'zod';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="grid max-h-screen grid-cols-1 bg-black md:grid-cols-2">
      <div className="login-gradient flex h-screen flex-col items-center justify-center *:w-5/6 md:*:w-95">
        {/* 1st column */}
        <div className="flex flex-col justify-start">
          <h1 className="font-lato text-3xl font-semibold tracking-tight text-white md:text-[32px]">
            Welcome to Crowhub 👋
          </h1>
          <span className="text-[#565073]">
            Don&apos;t have an account? &nbsp;
            <Link href={'/signup'} className="text-primary-gradient">
              Register
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
                    Email
                  </FieldLabel>
                  <Input
                    id="unique-identifier"
                    placeholder="E.g. johndoe@example.com"
                    type="text"
                    className="font-lato border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-[#565073] backdrop-blur-xs placeholder:text-[#565073]"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <div className="flex flex-col">
                    <InputGroup className="font-lato border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-[#565073] backdrop-blur-xs">
                      <InputGroupInput
                        placeholder="Enter password"
                        type="password"
                        className="p-0 placeholder:text-[#565073]"
                      />
                      <InputGroupAddon align="inline-end" className="p-0">
                        {showPassword ? (
                          <EyeIcon
                            width={30}
                            className="text-white"
                            onClick={handleShowPassword}
                          />
                        ) : (
                          <Image
                            src={EyeClosed}
                            alt="eye-closed"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                            onClick={handleShowPassword}
                          />
                        )}
                      </InputGroupAddon>
                    </InputGroup>
                    <Link
                      href={'#'}
                      className="font-lato py-2 text-[16px] font-semibold text-[#565073] underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </Field>
                <Button
                  type="submit"
                  className="font-lato mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#C28CFF] to-[#4845FE] px-6 py-6 text-[20px] font-bold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Continue
                </Button>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>
        <div className="absolute bottom-5 w-90.25 text-center md:bottom-20">
          <span className="font-lato text-[14px] font-semibold text-[#565073] *:underline *:decoration-dotted *:hover:text-[#C28CFF]">
            By continuing, you agree to our <br />
            <Link href={'#'}>Terms of Service,</Link>
            &nbsp;
            <Link href={'#'}>Privacy Policy</Link>
            &nbsp; & &nbsp;
            <Link href={'#'}>Content Policy</Link>
          </span>
        </div>
      </div>
      <div className="hidden md:block">
        {/* 2nd column */}
        <Image
          src={LoginBg}
          alt="simple floating phones"
          className="h-screen w-full opacity-40"
        />
        <div className="w-110.73 absolute top-2/5 left-3/5 flex flex-col justify-start text-white">
          <span className="font-lato text-5xl font-bold">Swipe Smarter 🧠</span>
          <span className="font-satisfy text-3xl">
            Professional connections that actually mean something...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

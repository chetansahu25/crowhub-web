'use client';

import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { ArrowLeft, EyeIcon } from 'lucide-react';
import Image from 'next/image';
import EyeClosed from '../../../../public/svgs/eye-closed.svg';
import { useState } from 'react';

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(true);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="min-w-full">
      {/* <div className="w-full">
        <ArrowLeft strokeWidth={3} className="text-white" />
      </div> */}

      <div className="flex w-full flex-col justify-start text-center md:text-left">
        <h1 className="font-lato text-3xl font-semibold tracking-tight text-white md:text-[32px]">
          Set your password 🔑
        </h1>
        <span className="font-lato mt-2 text-[16px] text-[#8D87A8]">
          Just one more step before you start connecting.
        </span>
      </div>

      {/* Form Section */}
      <div className="w-full pt-8 text-white">
        <form>
          <FieldGroup>
            <FieldSet>
              {' '}
              <Field>
                <FieldLabel
                  htmlFor="password"
                  className="font-lato font-semibold"
                >
                  Set Password
                </FieldLabel>
                <InputGroup className="font-lato border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-[#565073] backdrop-blur-xs">
                  <InputGroupInput
                    placeholder="Enter password"
                    id="password"
                    name="password"
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
              </Field>
              {/* Field: Username */}
              <Field>
                <FieldLabel
                  htmlFor="re-enter-password"
                  className="font-lato font-semibold"
                >
                  Re-enter Password
                </FieldLabel>
                <InputGroup className="font-lato border border-[#ffffff1a] bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-[#565073] backdrop-blur-xs">
                  <InputGroupInput
                    placeholder="Re-enter password"
                    id="re-enter-password"
                    name="re-enter-password"
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
              </Field>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default PasswordField;

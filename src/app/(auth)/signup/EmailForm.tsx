'use client';

import { useFormContext } from 'react-hook-form'; // <--- The Missing Link
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import type { SignupFormData } from '@/lib/validations/onboarding'; // Import your type
import { CircleAlertIcon } from 'lucide-react';

const EmailForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  return (
    <div className="min-w-full">
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

      <div className="w-full pt-8 text-white">
        <FieldGroup>
          <FieldSet>
            <Field>
              {/* Field: Email */}
              <FieldLabel htmlFor="email" className="font-lato font-semibold">
                Enter Email
              </FieldLabel>
              <Input
                id="email"
                placeholder="E.g. johndoe@example.com"
                type="email"
                autoComplete="email"
                {...register('email')}
                className={`font-lato w-full rounded-lg border bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-white transition-all placeholder:text-[#565073] focus:border-transparent focus:ring-2 focus:ring-[#C28CFF] ${errors.email ? 'border-red-500' : 'border-[#ffffff1a]'}`}
              />
              {/* Error Message */}
              {errors.email && (
                <p className="font-lato mt-2 flex items-center gap-2 text-sm text-red-400">
                  {' '}
                  <CircleAlertIcon strokeWidth={2} width={16} />{' '}
                  {errors.email.message}
                </p>
              )}
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
                id="username"
                placeholder="E.g. Crow_01"
                type="text"
                autoComplete="username"
                {...register('username')}
                className={`font-lato w-full rounded-lg border bg-[#ffffff1a] py-5 pr-3 pl-6 text-[16px] text-white transition-all placeholder:text-[#565073] focus:border-transparent focus:ring-2 focus:ring-[#C28CFF] ${errors.username ? 'border-red-500' : 'border-[#ffffff1a]'}`}
              />
              {errors.username && (
                <p className="font-lato mt-2 flex items-center gap-2 text-sm text-red-400">
                  {' '}
                  <CircleAlertIcon strokeWidth={2} width={16} />{' '}
                  {errors.username.message}
                </p>
              )}
            </Field>
          </FieldSet>
        </FieldGroup>
      </div>
    </div>
  );
};

export default EmailForm;

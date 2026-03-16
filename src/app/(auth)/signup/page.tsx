'use client';

import Image from 'next/image';
import EmailForm from './EmailForm';
import PasswordField from './PasswordField';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  masterSignupSchema,
  type SignupFormData,
} from '@/lib/validations/onboarding'; // Your schema file
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  completeProfile,
  initiateSignup,
  verifyOtpAndLogin,
} from '@/app/actions/auth-bridge';
import EnterOtp from '@/components/EnterOtp';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const methods = useForm<SignupFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(masterSignupSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      otp: '',
    },
  });

  const { trigger, getValues, setError } = methods;

  const handleNext = async () => {
    console.log('handle next click');
    setIsSubmitting(true);
    let isValid = false;

    try {
      if (currentStep === 1) {
        isValid = await trigger(['email', 'username']);
        console.log(isValid);
        console.log(methods.formState.errors);
        if (isValid) setCurrentStep(2);
      } else if (currentStep === 2) {
        isValid = await trigger(['password']);
        await setTimeout(() => {}, 3000);

        if (isValid) {
          const result = await initiateSignup({
            email: getValues('email'),
            username: getValues('username'),
            password: getValues('password'),
          });

          if (result.success) {
            setCurrentStep(3);
          } else {
            setError('root', { message: result.error });
          }
        }
      } else if (currentStep === 3) {
        isValid = await trigger(['otp']);

        if (isValid) {
          const result = await verifyOtpAndLogin({
            email: getValues('email'),
            otp: getValues('otp'),
          });

          if (result.success) {
            router.push('/dashboard');
          } else {
            setError('otp', { message: result.error || 'Invalid code' });
          }
        }
      }
    } catch (err) {
      console.error('Wizard Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
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

      <div className="relative z-10 w-126">
        <div className="flex flex-col items-center justify-center rounded-[24px] border border-white/10 bg-black/50 p-8 backdrop-blur-sm md:p-16">
          {currentStep !== 1 && (
            <button
              className="flex w-full cursor-pointer items-center justify-start gap-2 pb-8 text-lg text-white"
              onClick={() => setCurrentStep((p) => p - 1)}
              disabled={isSubmitting}
            >
              <ArrowLeft strokeWidth={3} className="text-white" />
              Back
            </button>
          )}

          <FormProvider {...methods}>
            {currentStep === 1 && <EmailForm />}
            {currentStep === 2 && <PasswordField />}
            {currentStep === 3 && <EnterOtp />}

            {methods.formState.errors.root && (
              <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-500">
                {methods.formState.errors.root.message}
              </div>
            )}

            <Button
              onClick={handleNext}
              disabled={isSubmitting}
              className="font-lato mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#C28CFF] to-[#4845FE] px-8 py-6 text-[20px] font-bold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              {isSubmitting && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              )}
              {currentStep === 4 ? 'Finish' : 'Next'}
              {currentStep !== 4 && (
                <ArrowRight strokeWidth={3} className="h-5 w-5" />
              )}
            </Button>
          </FormProvider>

          {/* Footer / Legal */}
          <div className="mt-20 w-full max-w-[90%] text-center">
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

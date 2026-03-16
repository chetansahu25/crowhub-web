import { z } from 'zod';

// Password Check Logic
const passwordPolicies = [
  { regex: /.{8,}/, message: 'At least 8 characters' },
  { regex: /[A-Z]/, message: 'At least one uppercase letter' },
  { regex: /[a-z]/, message: 'At least one lowercase letter' },
  { regex: /[0-9]/, message: 'At least one number' },
];

export const createPasswordSchema = () => {
  let schema = z.string();
  for (const policy of passwordPolicies) {
    schema = schema.regex(policy.regex, { message: policy.message });
  }
  return schema;
};

export const stepOneShape = z.object({
  email: z.email({ message: 'Please enter a valid email address' }),
  username: z.string().min(3, { message: 'Username must be at least 3 chars' }),
});

export const stepTwoShape = z.object({
  password: createPasswordSchema(),
  confirmPassword: z.string(),
});

export const stepThreeShape = z.object({
  otp: z.string().length(6, { message: 'OTP must be 6 digits' }),
});

export const stepOneSchema = stepOneShape;

export const stepTwoSchema = stepTwoShape.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
);

export const stepThreeSchema = stepThreeShape;

export const masterSignupSchema = stepOneShape
  .extend(stepTwoShape.shape) // Unwraps the shape of step 2
  .extend(stepThreeShape.shape) // Unwraps the shape of step 3
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
export type SignupFormData = z.infer<typeof masterSignupSchema>;

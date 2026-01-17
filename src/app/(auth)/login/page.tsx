import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <div>
        {/* 1st column */}
        <div>
          <h1>Welcome to Crowhub 👋</h1>
          <span>
            Don&apos;t have an account? <Link href={'/signup'}>Register</Link>
          </span>
        </div>
        <div>
          <form action="">
            <FieldGroup>
              <FieldSet>
                <Field>
                  <FieldLabel htmlFor="unique-identifier">
                    Email or Mobile Number
                  </FieldLabel>
                  <Input
                    id="unique-identifier"
                    placeholder="E.g. johndoe@example.com"
                    type="text"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                </Field>
              </FieldSet>
              <FieldSet>
                <Link href={'#'}>Forgot Password</Link>
              </FieldSet>
              <Field>
                <Button type="submit">Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
      <div>{/* 2nd column */}</div>
    </div>
  );
};

export default Login;

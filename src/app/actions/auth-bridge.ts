'use server';

import { cookies } from 'next/headers';

const GO_API_URL = process.env.GOLANG_API_URL || 'http://localhost:8080';

// Step 2 -> 3: Send Data to Golang to trigger OTP
export async function initiateSignup(payload: {
  email: string;
  username: string;
  password: string;
}) {
  try {
    const res = await fetch(`${GO_API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      return {
        success: false,
        error: error.message || 'Failed to initiate signup',
      };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: 'Network error connecting to auth server' };
  }
}

// Step 3 -> 4: Verify OTP and Get Token
export async function verifyOtpAndLogin(payload: {
  email: string;
  otp: string;
}) {
  try {
    const res = await fetch(`${GO_API_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { success: false, error: 'Invalid OTP' };
    }

    const data = await res.json(); // Assuming Golang returns { token: "..." }

    // SECURITY CRITICAL: Store token in HTTP-Only Cookie
    (await cookies()).set('session_token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: 'Verification failed' };
  }
}

// Step 4 -> Finish: Update Profile
export async function completeProfile(payload: {
  fullName: string;
  age: number;
}) {
  const token = (await cookies()).get('session_token')?.value;

  if (!token) return { success: false, error: 'Unauthorized' };

  const res = await fetch(`${GO_API_URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return res.ok
    ? { success: true }
    : { success: false, error: 'Update failed' };
}

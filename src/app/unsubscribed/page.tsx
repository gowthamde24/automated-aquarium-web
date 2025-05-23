"use client";

import { useSearchParams,  } from 'next/navigation';

export default function UnsubscribedPage() {
  
  let isSuccess: string | boolean | null = false;
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  try{
    isSuccess = searchParams.get('success');
  } catch (error) {}

  const isValidEmail = (email: string | null) => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = isValidEmail(email);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* <h1>Unsubscribed Successfully</h1> */}
      {isEmailValid && !isSuccess ? (
        <p>The email <strong>{email}</strong> has been successfully unsubscribed.</p>
      ) : (
        <p>Unsubscribed was not successful</p>
      )}
    </div>
  );
}
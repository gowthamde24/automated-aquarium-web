"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function UnsubscribeMessage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  let isSuccess: string | boolean | null = false;

  try {
    isSuccess = searchParams.get('success');
  } catch (error) {
    console.warn("Error accessing search params", error);
  }

  const isValidEmail = (email: string | null) => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = isValidEmail(email);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {isEmailValid && !isSuccess ? (
        <p>The email <strong>{email}</strong> has been successfully unsubscribed.</p>
      ) : (
        <p>Unsubscribed was not successful</p>
      )}
    </div>
  );
}

export default function UnsubscribedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnsubscribeMessage />
    </Suspense>
  );
}
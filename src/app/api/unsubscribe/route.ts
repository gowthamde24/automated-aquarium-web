import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { error: 'Email is required to unsubscribe.' },
      { status: 400 }
    );
  }

  try {
    // Simulate removing the email from the subscription list
    // Replace this with your actual database or service logic
    console.log(`Unsubscribing email: ${email}`);

    // Respond with a success message
    return NextResponse.json(
      { message: `Successfully unsubscribed ${email}.` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unsubscribing:', error);
    return NextResponse.json(
      { error: 'An error occurred while trying to unsubscribe.' },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const revalidate = 0;

export async function GET() {
  try {
    const payments = await stripe.paymentIntents.list({
      expand: ["data.latest_charge"],
    });
    const paymentData = payments.data;

    return NextResponse.json(paymentData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
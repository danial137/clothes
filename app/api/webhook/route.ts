import { error } from "console";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get("stripe-signature");
  if (!sig) {
    return NextResponse.json(
      {
        error: "No Signature",
      },
      {
        status: 400,
      }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.log("stripe webhook secret is not set");
    return NextResponse.json(
      {
        error: "stripe webhook secret is not set",
      },
      { status: 400 }
    );
  }
}

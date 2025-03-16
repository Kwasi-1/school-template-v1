import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { studentId, amount, reference } = await req.json();

    // Verify Payment with Paystack
    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
    const verifyResponse = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${paystackSecretKey}` },
    });

    if (verifyResponse.data.data.status !== "success") {
      return NextResponse.json({ error: "Payment not verified" }, { status: 400 });
    }

    // Save Payment in Firestore
    await addDoc(collection(db, "payments"), {
      studentId,
      amount,
      reference,
      status: "Successful",
      date: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Payment successful & recorded" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

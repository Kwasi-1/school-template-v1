import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
// import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  // Verify Paystack event
  if (body.event !== "charge.success") {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  const { email, amount, metadata, reference } = body.data;
  const studentName = metadata.student_name;
  const schoolId = metadata.school_id;

  try {
    // Save payment details in Firestore
    await addDoc(collection(db, "payments"), {
      parent_email: email,
      student_name: studentName,
      amount: amount / 100, // Convert kobo to GHS
      school_id: schoolId,
      transaction_id: reference,
      status: "successful",
      payment_date: new Date().toISOString(),
    });

    // Send receipt email
    // await sendReceiptEmail(email, studentName, amount / 100, reference);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

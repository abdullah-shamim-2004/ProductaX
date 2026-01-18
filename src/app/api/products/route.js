import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const allproducts = await products.find();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occur to get products." },
      { status: 500 }
    );
  }
}

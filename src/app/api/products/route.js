import connectDB from "@/lib/dbConnect";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    // ২. 'products.find()' এর বদলে 'Product.find()' হবে (আপনার মডেলের নাম অনুযায়ী)
    const allproducts = await Product.find();

    return NextResponse.json(allproducts, { status: 200 });
  } catch (error) {
    // এররটি কনসোলে প্রিন্ট করলে আপনি আসল সমস্যা বুঝতে পারবেন
    console.error("GET Products Error:", error);

    return NextResponse.json(
      {
        message: "Error occurred while fetching products.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // connect with mongodb
    await connectDB();
    // get the information from reqest body
    const { name, email, password } = await req.json();
    // validate the information
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fillup the every field." },
        { status: 400 },
      );
    }
    // Check whatever the user exist or not
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json()(
        { message: "This email already exist." },
        { status: 400 },
      );
    }
    // Create user in database
    await User.create({
      name,
      email,
      password,
    });
    // Return the response
    return NextResponse.json(
      { message: "The user created successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
  }
}

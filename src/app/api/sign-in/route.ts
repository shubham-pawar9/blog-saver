import { NextResponse } from "next/server";
import connectToDB from "@/database";
import User from "../../../models/User";
import Joi from "joi";
import bcrypt from "bcryptjs";

const SignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Correctly type the `req` parameter
export const POST = async (req: Request) => {
  try {
    await connectToDB();
    const signInData = await req.json();

    const { error } = SignInSchema.validate(signInData);
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: signInData.email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(signInData.password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return NextResponse.json(
      {
        success: true,
        message: "User signed in successfully",
        user: userResponse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

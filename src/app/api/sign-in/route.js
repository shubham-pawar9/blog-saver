import { NextResponse } from "next/server";
import connectToDB from "@/database";
import User from "@/models/User";
import Joi from "joi";
import bcrypt from "bcryptjs";

const SignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const POST = async (req) => {
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

    // Compare provided password with the hashed password in the database
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

    // Prepare the response with user data
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      // Add any other fields you need
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
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

export default POST;

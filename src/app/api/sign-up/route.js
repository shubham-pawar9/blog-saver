import { NextResponse } from "next/server";
import connectToDB from "@/database";
import User from "@/models/User";
import Joi from "joi";
// import bcrypt from "bcryptjs"; // Uncomment if you use bcrypt for password hashing

const SignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const POST = async (req) => {
  try {
    await connectToDB();
    const userData = await req.json();

    const { error } = SignUpSchema.validate(userData);
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already in use",
        },
        { status: 409 }
      );
    }

    // Hash the password before saving (uncomment if using bcrypt)
    // const hashedPassword = await bcrypt.hash(userData.password, 10);
    // const newUser = new User({ ...userData, password: hashedPassword });

    const newUser = new User(userData);
    await newUser.save();

    // Prepare the response with user data
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      // Add any other fields you need
    };

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: userResponse,
      },
      { status: 201 }
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

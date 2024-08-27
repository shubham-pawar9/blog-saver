import Joi from "joi";
import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Blog from "@/models/Blog";
import { NextRequest } from "next/server";

// Define the schema for validation
const AddNewBlogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  user: Joi.string().required(), // User ID field
});

// POST request handler with proper typing
export const POST = async (req) => {
  try {
    await connectToDB();
    const extractBlogData = await req.json();

    // Validate request data
    const { error } = AddNewBlogSchema.validate(extractBlogData);
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    // Create a new blog entry
    const newlyCreatedBlogItem = await Blog.create(extractBlogData);

    if (newlyCreatedBlogItem) {
      return NextResponse.json(
        {
          success: true,
          message: "Blog added successfully",
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create blog item",
        },
        { status: 500 }
      );
    }
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

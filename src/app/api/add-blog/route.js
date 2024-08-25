// api/add-blog/route.js
import Joi from "joi";
import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Blog from "@/models/Blog";

const AddNewBlogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  user: Joi.string().required(), // Add this field to accept user ID
});

export const POST = async (req) => {
  try {
    await connectToDB();
    const extractBlogData = await req.json();

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

export default POST;

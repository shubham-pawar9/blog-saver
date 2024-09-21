import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Blog from "../../../models/Blog"; // Ensure this import points to your Blog model

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Get userId from query parameters
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    let blogs;
    if (userId) {
      // Fetch blogs for the specific user
      blogs = await Blog.find({ user: userId });
    } else {
      // Fetch all blogs if no userId is provided
      blogs = await Blog.find();
    }

    // Return the fetched blogs
    return NextResponse.json(
      {
        success: true,
        data: blogs,
        message: blogs.length ? "Blogs fetched successfully" : "No blogs found",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

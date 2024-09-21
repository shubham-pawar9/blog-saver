import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Blog from "@/models/Blog";

export async function DELETE(req, { params }) {
  const { id } = params; // <-- Extracting 'id' from the params in the dynamic route

  await connectToDB();

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

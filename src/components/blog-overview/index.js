"use client";

import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import BlogList from "../blog-list";
import { toast } from "sonner";
import Navbar from "@/components/navbar";
const initialBlogData = {
  title: "",
  description: "",
};
const BlogOverview = ({ userId }) => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogData);
  //   console.log(blogFormData);

  const formatDate = (date) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-GB", options);
  };
  const handleSaveBlogData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        toast("User is not logged in. Please log in to create a blog.");
        setLoading(false);
        return;
      }
      const blogDataWithUser = {
        ...blogFormData,
        user: user.id, // Assuming user has an 'id' property
      };
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogDataWithUser),
      });

      const result = await apiResponse.json();
      console.log(result);

      if (result.success) {
        const currentDate = new Date();
        toast(result.message, {
          description: `Created at: ${formatDate(currentDate)}`,
        });
        setOpenBlogDialog(false);
        setBlogFormData(initialBlogData);
        fetchBlogs();
      } else {
        toast(result.message, {
          description: "Failed to create blog",
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogData);
      toast("An error occurred while saving the blog");
    }
  };

  const [blogs, setBlogs] = useState([]); // State to store fetched blogs
  const [blogLoading, setBlogLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Function to fetch blogs
  const fetchBlogs = async () => {
    setBlogLoading(true);
    setError(null);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      try {
        const response = await fetch(`/api/get-blogs?userId=${user.id}`); // Pass userId as a query parameter
        const result = await response.json();

        if (result.success) {
          setBlogs(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("An error occurred while fetching blogs.");
      } finally {
        setBlogLoading(false);
      }
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []); // Empty dependency array means this useEffect runs only on mount
  return (
    <>
      <Navbar />
      <div
        classname="blog-mainBox"
        style={{
          display: "flex",
          gap: "10px",
          margin: "10px",
          justifyContent: "flex-end",
        }}
      >
        <BlogList blogs={blogs} blogLoading={blogLoading} error={error} />
        <AddNewBlog
          openBlogDialog={openBlogDialog}
          setOpenBlogDialog={setOpenBlogDialog}
          loading={loading}
          blogFormData={blogFormData}
          setBlogFormData={setBlogFormData}
          handleSaveBlogData={handleSaveBlogData}
        />
      </div>
    </>
  );
};
export default BlogOverview;

"use client";

import { Typography } from "@mui/material";
import BlogCard from "../card";
const BlogList = ({ blogs, blogLoading, error, setBlogRefresh }) => {
  return (
    <div
      className="blog-list-box"
      style={{
        width: "80%",
        textAlign: "center",
        padding: "10px",
        boxShadow: "0px 0px 4px gray",
        height: "calc(100vh - 85px)",
        overflowY: "auto",
      }}
    >
      {blogLoading && <p>Loading...</p>} {/* Show loading state */}
      {error && <p>Error: {error}</p>} {/* Show error message */}
      {blogs.length > 0 ? ( // Check if blogs are fetched
        <>
          <BlogCard blogs={blogs} setBlogRefresh={setBlogRefresh} />
        </>
      ) : (
        <Typography>No Blogs Available</Typography>
      )}
    </div>
  );
};

export default BlogList;

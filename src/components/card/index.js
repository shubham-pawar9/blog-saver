import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";
import { toast } from "sonner";
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

const BlogCard = ({ blogs, setBlogRefresh }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/delete-blog/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (result.success) {
        console.log("Blog deleted successfully");
        setBlogRefresh((prev) => !prev);
        toast("Blog deleted successfully", {});
      } else {
        console.error(result.message);
        toast(result.message, {});
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast(error.message, {});
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "5px",
        justifyContent: "flex-start",
      }}
    >
      {blogs.map((item) => (
        <Card
          className="card-box"
          key={item._id}
          sx={{
            height: "200px",
            width: "300px",
            boxShadow: "1px 1px 4px 1px #8080806b",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "4px",
              marginTop: "4px",
            }}
          >
            <DeleteIcon
              sx={{ cursor: "pointer" }}
              onClick={() => handleDelete(item._id)}
            />
          </Box>
          <CardActionArea sx={{ position: "revert" }}>
            <Typography
              sx={{ position: "absolute", right: "10px", bottom: "10px" }}
              variant="body2"
              color="text.secondary"
            >
              {formatDate(item.createdAt)}
            </Typography>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                sx={{ fontWeight: 600, color: "#423f3f" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Title - {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Description</b> - {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default BlogCard;

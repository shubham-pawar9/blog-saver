import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

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

const BlogCard = ({ blogs }) => {
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

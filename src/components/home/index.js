import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

// Example of a functional component
const HomePage = () => {
  const router = useRouter();
  return (
    <Box className="homeBox" sx={{ display: "flex", alignItems: "center" }}>
      <Image width={800} height={100} src="/img/home-banner.jpg" alt="banner" />
      <Box>
        <Typography
          sx={{ fontSize: "50px", fontWeight: "600", color: "#ecba00" }}
        >
          Blog-Saver
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: "20px",
            lineHeight: "1.5rem",
            textDecoration: "underline",
            marginLeft: "3px",
          }}
        >
          You can add your daily notes as a blogs.
        </Typography>
        <Typography
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Button variant="outline" onClick={() => router.push("/signup")}>
            Create an account
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;

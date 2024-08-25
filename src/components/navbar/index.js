"use client"; // Ensure this component is treated as a client-side component

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
    toast.success("Successfully logout");
  };

  return (
    <AppBar position="static" sx={{ background: "#FFF", color: "#b79c8a" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blog Saver
        </Typography>
        <Box>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

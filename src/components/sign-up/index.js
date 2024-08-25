"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Link from "next/link";
import { toast } from "sonner";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter(); // Initialize useRouter

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        if (result.user) {
          localStorage.setItem("user", JSON.stringify(result.user));
        }
        setFormData({ name: "", email: "", password: "" });
        router.push(`/blogs/${result.user.id}`); // Navigate to the /blogs page
      } else {
        console.log(result);
        toast.success(result.message);
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error("Failed to register user. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card sx={{ mt: 8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create account!
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Already have an Account? <Link href="/login">Sign In</Link>
                </Typography>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUpForm;

"use client";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = React.useState(false); // State for "Remember me"
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sign-in", {
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
          // Store user data in localStorage if "Remember me" is checked
          localStorage.setItem("user", JSON.stringify(result.user));
          if (rememberMe) {
            localStorage.setItem("email", formData.email); // Save email
            localStorage.setItem("password", formData.password); // Save password
          } else {
            // Clear saved credentials if "Remember me" is not checked
            localStorage.removeItem("email");
            localStorage.removeItem("password");
          }
          setFormData({ email: "", password: "" });
          router.push(`/blogs/${result.user.id}`);
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome!
            </Typography>
            <Typography component="h2" variant="subtitle1">
              Sign in to your account
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body2">
                    Dont have an Account? <Link href="/signup">Sign Up</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginForm;

"use client";
import React from "react";
import HomePage from "@/components/home";
//convert server component to client component

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100%", background: "#FFF" }}>
      <HomePage />
    </div>
  );
}

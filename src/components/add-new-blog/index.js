"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
const AddNewBlog = ({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) => {
  return (
    <>
      <div
        className="add-blog-box"
        style={{
          width: "20%",
          textAlign: "center",
          padding: "10px",
          boxShadow: "0px 0px 4px gray",
          height: "calc(100vh - 85px)",
          overflowY: "auto",
        }}
      >
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                nanme="title"
                value={blogFormData.title}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    title: event.target.value,
                  })
                }
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                nanme="description"
                value={blogFormData.description}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: event.target.value,
                  })
                }
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveBlogData} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddNewBlog;

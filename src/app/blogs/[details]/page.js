import BlogOverview from "@/components/blog-overview";

const UserBlogs = ({ params }) => {
  console.log(params);
  return (
    <>
      <BlogOverview userId={params.details} />
    </>
  );
};
export default UserBlogs;

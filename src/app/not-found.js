import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Sorry This page is not available</h2>
      <Link href={"/"}>Go back to Home page</Link>
    </>
  );
};
export default NotFound;

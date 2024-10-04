import { Outlet } from "react-router";
import Navbar from "../ui/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;

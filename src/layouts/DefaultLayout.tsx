import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
export default function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

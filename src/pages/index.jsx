import React from "react";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default index;

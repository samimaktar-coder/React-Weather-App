import React from "react";
import "../../App.css";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className='container'>
      <Header />
      <Outlet/>
    </div>
  );
}
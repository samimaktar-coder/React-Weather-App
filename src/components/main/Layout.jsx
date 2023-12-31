import React from "react";
import "../../App.css";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className='container'>
      <div className='app-heading'>
        <h1>Climate Canvas</h1>
        <p>Exploring Climate Creatively</p>
      </div>
      <Header />
      <Outlet />
      <div className='github-link'>
        <a
          href='https://github.com/Samim-Aktar-coder/React-Weather-App'
          target='_blank'
        >
          Open source code
        </a>{" "}
        by Samim
      </div>
    </div>
  );
}

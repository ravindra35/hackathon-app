import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import ProfileContainer from "../components/container/ProfileContainer";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
      <div className="theme-layout">
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfileContainer/>} />
          <Route path="/" element={<Container />} />
        </Routes>
      </div>
  );
};

export default Layout;

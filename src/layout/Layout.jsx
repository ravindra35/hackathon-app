import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import ProfileContainer from "../components/container/ProfileContainer";

import { Route, Routes } from "react-router-dom";
import HobbiesContainer from "../components/container/HobbiesContainer";
import PasswordContainer from "../components/container/PasswordContainer";
import SocialMediaContainer from "../components/container/SocialMediaContainer";

const Layout = () => {
  return (
    <div className="theme-layout">
      <Header />
      <Routes>
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/hobbies" element={<HobbiesContainer />} />
        <Route path="/password" element={<PasswordContainer />} />
        <Route path="/socialmedia" element={<SocialMediaContainer />} />
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
};

export default Layout;

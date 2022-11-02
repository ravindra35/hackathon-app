import React from "react";
import Leftsidebar from "../leftsidebar/Leftsidebar";
import Main from "../main/Main";
import RightSidebar from "../rightsidebar/RightSidebar";
import Profile from "../profile/profile";
import Cover from "../profile/cover";
import Hobbies from "../profile/hobbies";

const ProfileContainer = () => {
  return (
    <section>
      <div className="gap gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="page-contents">
                <Leftsidebar  />
                <Profile />
                <Cover />
                <Hobbies />
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileContainer;

import React from "react";
import Leftsidebar from "../leftsidebar/Leftsidebar";
import Main from "../main/Main";
import RightSidebar from "../rightsidebar/RightSidebar";

import Cover from "../profile/cover";
import Password from "../password/password";
import InfoPane from "../infopane/InfoPane";

const PasswordContainer = () => {
  return (
    <section>
      <div className="gap gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="page-contents">
                <Cover />
                <div className="col-lg-3">
                  <Leftsidebar />
                  <InfoPane />
                </div>

                <Password />

                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordContainer;

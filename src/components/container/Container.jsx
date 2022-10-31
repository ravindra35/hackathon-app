import React from "react";
import Leftsidebar from "../leftsidebar/Leftsidebar";
import Main from "../main/Main";
import RightSidebar from "../rightsidebar/RightSidebar";

const Container = () => {
  return (
    <section>
      <div class="gap gray-bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="row" id="page-contents">
                <Leftsidebar />
                <Main />
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;

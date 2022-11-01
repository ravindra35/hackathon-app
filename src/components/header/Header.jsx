import React from "react";

const Header = () => {
  return (
    <>
      <div className="responsive-header">
        <div className="mh-head first Sticky">
          <span className="mh-text">
            <a href="/" title="">
            <img src="images/logo.png" alt="" />
            </a>
          </span>
        </div>
      </div>
      <div className="topbar stick">
        <div className="logo">
          <a title="" href="/">
            <img src="images/logo.png" alt="" />
          </a>
        </div>

        <div className="top-area">
          <ul className="setting-area">
            <li>
              <a href="/" title="Home" data-ripple="">
                <i className="ti-home"></i>
              </a>
            </li>
          </ul>
          <div className="user-img">
            <img src="images/resources/admin.jpg" alt="" />
            <span className="status f-online"></span>
            <div className="user-setting">
              <a href="#" title="">
                <i className="ti-user"></i> view profile
              </a>
              <a href="#" title="">
                <i className="ti-power-off"></i>log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

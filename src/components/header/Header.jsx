import React from "react";

const Header = () => {
  return (
    <>
      <div className="responsive-header">
        <div className="mh-head first Sticky">
          <span className="mh-btns-left">
            <a className="" href="#menu">
              <i className="fa fa-align-justify"></i>
            </a>
          </span>
          <span className="mh-text">
            <a href="newsfeed.html" title="">
              <img src="images/logo2.png" alt="" />
            </a>
          </span>
          <span className="mh-btns-right">
            <a className="fa fa-sliders" href="#shoppingbag"></a>
          </span>
        </div>
        <div className="mh-head second">
          <form className="mh-form">
            <input placeholder="search" />
            <a href="#/" className="fa fa-search"></a>
          </form>
        </div>
        <nav id="menu" className="res-menu">
          <ul>
            <li>
              <span>Home</span>
            </li>
          </ul>
        </nav>
        <nav id="shoppingbag">
          <div>
            <div className="">
              <form method="post">
                <div className="setting-row">
                  <span>use night mode</span>
                  <input type="checkbox" id="nightmode" />
                  <label
                    htmlFor="nightmode"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Notifications</span>
                  <input type="checkbox" id="switch2" />
                  <label
                    htmlFor="switch2"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Notification sound</span>
                  <input type="checkbox" id="switch3" />
                  <label
                    htmlFor="switch3"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>My profile</span>
                  <input type="checkbox" id="switch4" />
                  <label
                    htmlFor="switch4"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Show profile</span>
                  <input type="checkbox" id="switch5" />
                  <label
                    htmlFor="switch5"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
              </form>
              <h4 className="panel-title">Account Setting</h4>
              <form method="post">
                <div className="setting-row">
                  <span>Sub users</span>
                  <input type="checkbox" id="switch6" />
                  <label
                    htmlFor="switch6"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>personal account</span>
                  <input type="checkbox" id="switch7" />
                  <label
                    htmlFor="switch7"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Business account</span>
                  <input type="checkbox" id="switch8" />
                  <label
                    htmlFor="switch8"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Show me online</span>
                  <input type="checkbox" id="switch9" />
                  <label
                    htmlFor="switch9"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Delete history</span>
                  <input type="checkbox" id="switch10" />
                  <label
                    htmlFor="switch10"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
                <div className="setting-row">
                  <span>Expose author name</span>
                  <input type="checkbox" id="switch11" />
                  <label
                    htmlFor="switch11"
                    data-on-label="ON"
                    data-off-label="OFF"
                  ></label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="topbar stick">
        <div className="logo">
          <a title="" href="newsfeed.html">
            <img src="images/logo.png" alt="" />
          </a>
        </div>

        <div className="top-area">
          <ul className="setting-area">
            <li>
              <a href="newsfeed.html" title="Home" data-ripple="">
                <i className="ti-home"></i>
              </a>
            </li>
          </ul>
          <div className="user-img">
            <img src="images/resources/admin.jpg" alt="" />
            <span className="status f-online"></span>
            <div className="user-setting">
              <a href="#" title="">
                <span className="status f-online"></span>online
              </a>
              <a href="#" title="">
                <span className="status f-away"></span>away
              </a>
              <a href="#" title="">
                <span className="status f-off"></span>offline
              </a>
              <a href="#" title="">
                <i className="ti-user"></i> view profile
              </a>
              <a href="#" title="">
                <i className="ti-pencil-alt"></i>edit profile
              </a>
              <a href="#" title="">
                <i className="ti-target"></i>activity log
              </a>
              <a href="#" title="">
                <i className="ti-settings"></i>account setting
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

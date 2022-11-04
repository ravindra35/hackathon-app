import React, { useState, useEffect } from "react";
import axios from "axios";

const Social = () => {
  const [btnloading, setBtnloading] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState();

  useEffect(() => {
    axios.get("http://localhost:9004/profile/getbyid/1").then((res) => {
      let response = res.data.payload;
      setLinkedinUrl(response.linkedin_url);
    });
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setLinkedinUrl(e.target.value);
  };

  const saveMedia = () => {
    setBtnloading(true);
    let linkObj = {
      profileId: 1,
      linkedin_url: linkedinUrl,
    };
    axios
      .post("http://localhost:9004/profile/updatesocialdetails", linkObj)
      .then((response) => {
        console.log(response, "api response");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setBtnloading(false);
      });
  };
  return (
    <div className="col-lg-6">
      <div className="central-meta">
        <div className="frnds">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="active" href="#frends" data-toggle="tab">
                My social media links
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active fade show " id="frends">
              <ul className="nearby-contct">
                <li>
                  <div className="nearly-pepls">
                    <figure>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </figure>
                    <div className="pepl-info">
                      <div className="form-group half">
                        <input
                          name="linkedinUrl"
                          value={linkedinUrl}
                          onChange={handleInputChange}
                        />

                        <i className="mtrl-select"></i>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="nearly-pepls">
                    <figure>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </figure>
                    <div className="pepl-info">
                      <div className="form-group half">
                        <input
                          type="text"
                          id="fid"
                          name="fid"
                          value={
                            "http://www.facebook.com/profile.php?id=benjamin-grant-72381ujy3u"
                          }
                        />

                        <i className="mtrl-select"></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nearly-pepls">
                    <figure>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </figure>
                    <div className="pepl-info">
                      <div className="form-group half">
                        <input
                          type="text"
                          id="iid"
                          name="iid"
                          value={"@benjamin-grant-72381ujy3u"}
                        />

                        <i className="mtrl-select"></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="submit-btns">
              <button type="button" className="mtr-btn" onClick={saveMedia}>
                {btnloading && (
                  <span className="ant-btn-loading-icon">
                    <span
                      role="img"
                      aria-label="loading"
                      className="anticon anticon-loading anticon-spin"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        focusable="false"
                        data-icon="loading"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                      </svg>
                    </span>
                  </span>
                )}
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;

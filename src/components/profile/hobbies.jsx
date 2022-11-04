import React, { useState, useEffect } from "react";
import axios from "axios";

const Hobbies = () => {
  const [myHobbies, setMyHobbies] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const [aboutMe, setAboutMe] = useState([]);
  const [btnloading, setBtnloading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:9004/profile/getbyid/1").then((res) => {
      let response = res.data.payload;
      // console.log(responseHobbies.split(","));
      setMyHobbies(response.hobbies.split(","));
      setAboutMe(response.aboutme);
    });
  }, []);

  const removeInterest = (index) => {
    console.log(index);
    const interests = myHobbies.filter((_, i) => i !== index);
    setMyHobbies(interests);
  };

  const addInterest = (e) => {
    e.preventDefault();

    let splitValues = newItem.split(",");
    splitValues.map((v, i) => {
      console.log(v, "v");
      setMyHobbies((myHobbies) => [...myHobbies, v]);
    });
    setNewItem([]);
    // if (newItem.indexOf(",") != -1) {
    //   setMyHobbies([...myHobbies, newItem]);
    // } else {
    //   let splitValues = newItem.split(",");
    //   setNewItem(...myHobbies, ...splitValues);
    // }

    console.log(splitValues);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  const handleTextInputChange = (e) => {
    e.preventDefault();
    setAboutMe(e.target.value);
  };

  const saveHobbies = () => {
    console.log(aboutMe, "am", myHobbies.join());
    setBtnloading(true);
    let hobbiesObj = {
      profileId: 1,
      aboutme: aboutMe,
      hobbies: myHobbies.join(),
    };
    axios
      .post("http://localhost:9004/profile/updateHobbiesAndAbout", hobbiesObj)
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
        <div className="editing-interest">
          <h5 className="f-title">
            <i className="ti-heart"></i>My Hobbies
          </h5>
          <p>{aboutMe}</p>
          <form method="post">
            <div className="form-group">
              <label>Add interests: </label>
              <input
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleInputChange}
                placeholder="Photography, Cycling, traveling."
              />
              <button type="submit" onClick={addInterest}>
                Add
              </button>
            </div>
            {myHobbies.length > 0 && (
              <ol className="interest-added">
                {myHobbies.map((hob, index) => (
                  <li key={index}>
                    <a title="">{hob}</a>
                    <span
                      className="remove"
                      title="remove"
                      onClick={() => removeInterest(index)}
                    >
                      <i className="fa fa-close"></i>
                    </span>
                  </li>
                ))}
              </ol>
            )}
            {myHobbies.length === 0 && (
              <div className="form-group">
                <p>No hobbies selected</p>
              </div>
            )}
            <div className="form-group">
              <textarea
                rows="4"
                id="textarea"
                value={aboutMe}
                onChange={handleTextInputChange}
                required="required"
              ></textarea>
              <label className="control-label" htmlFor="textarea">
                About Me
              </label>
              <i className="mtrl-select"></i>
            </div>
            <div className="submit-btns">
              {/* <button type="button" className="mtr-btn">
                <span>Cancel</span>
              </button> */}
              <button type="button" className="mtr-btn" onClick={saveHobbies}>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

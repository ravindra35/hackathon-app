import React, { useState } from "react";

const Hobbies = () => {
  const [myHobbies, setMyHobbies] = useState([
    "bycicling",
    "traveling",
    "photography",
    "shopping",
    "eating",
    "hoteling",
  ]);
  const [newItem, setNewItem] = useState([]);
  const removeInterest = (index) => {
    console.log(index);
    const interests = myHobbies.filter((_, i) => i !== index);
    setMyHobbies(interests);
  };

  const addInterest = (e) => {
    e.preventDefault();

    setMyHobbies([...myHobbies, newItem]);
    console.log(myHobbies);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  return (
    <div className="col-lg-6">
      <div className="central-meta">
        <div className="editing-interest">
          <h5 className="f-title">
            <i className="ti-heart"></i>My interests
          </h5>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate
          </p>
          <form method="post">
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
            {myHobbies.length === 0 && <p>No hobbies selected</p>}
            <div className="submit-btns">
              <button type="button" className="mtr-btn">
                <span>Cancel</span>
              </button>
              <button type="button" className="mtr-btn">
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hobbies;

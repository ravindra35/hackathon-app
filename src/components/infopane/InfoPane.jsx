import React from "react";
import { Link } from "react-router-dom";

const InfoPane = () => {
  return (
    <aside className="sidebar static">
      <div className="widget stick-widget">
        <h4 className="widget-title">Edit info</h4>
        <ul className="naves">
          <li>
            <i className="ti-info-alt"></i>
            <Link to="/profile">Basic info</Link>
          </li>
          <li>
            <i className="ti-mouse-alt"></i>
            <Link to="/socialmedia">Social Media</Link>
          </li>
          <li>
            <i className="ti-heart"></i>
            <Link to="/hobbies">My Hobbies</Link>
          </li>

          <li>
            <i className="ti-lock"></i>
            <Link to="/password">change password</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default InfoPane;

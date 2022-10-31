import React from "react";
import CreatePost from "./CreatePost";
import NewsFeed from "./NewsFeed";

const Main = () => {
  return (
    <div className="col-lg-6">
      <CreatePost />
      <NewsFeed />
    </div>
  );
};

export default Main;

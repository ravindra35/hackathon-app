import FeedTile from "./FeedTile";
import { useSelector } from "react-redux";

const NewsFeed = () => {
  const { postData } = useSelector((state) => state?.postData);
  return (
    <div className="loadMore">
      {postData?.map((i) => (
        <FeedTile item={i} />
      ))}
    </div>
  );
};

export default NewsFeed;

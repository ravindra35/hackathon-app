import FeedTile from "./FeedTile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getPostDetails } from "../../redux/posts/postSlice";
import { Spin } from "antd";

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { postData, isLoading } = useSelector((state) => state?.postData);
  const [data, setData] = useState([]);

  const showMoreRef = useRef();
  useEffect(() => {
    setData(postData);
  }, [postData]);

  const [page, setPage] = useState({
    skip: 0,
    take: 2,
  });
  const handlePageChange = (status = "more") => {
    if (status === "less") {
      setPage({
        skip: 0,
        take: 2,
      });
    } else {
      setPage({
        take: page.take + 2,
        skip: 0,
      });
      if (showMoreRef.current) {
        showMoreRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    fetchAllposts();
  }, []);

  const fetchAllposts = () => {
    const req = {
      post: {
        profileId: 0,
      },
    };

    dispatch(getPostDetails(req));
  };
  const { skip, take } = page;
  return (
    <div className="loadMore">
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <Spin />
        </div>
      )}
      {data?.length > 0 && (
        <>
          {data?.map((i) => (
            <FeedTile item={i}  key={i?.postId}/>
          ))}
          {/* <div className="d-flex justify-content-center align-items-center">
            <div ref={showMoreRef}>
              {data?.length > take && (
                <span
                  className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                  onClick={() => handlePageChange()}
                  style={{ fontSize: "12px" }}
                >
                  Load More Posts
                </span>
              )}
         
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default NewsFeed;

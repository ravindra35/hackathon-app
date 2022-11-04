import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useRef, useState } from "react";
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { saveComment } from "../../redux/posts/postSlice";
import settingsService from "../../redux/service";

const CommentContainer = (props) => {
  console.log(props);
  const [text, setText] = useState("");
  const [commentBtnloading, setCommentBtnloading] = useState(false);
  const showMoreRef = useRef();

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

  const handleComment = async () => {
    const payload = {
      body: text,
      postId: 5,
      userId: 5,
    };
    const req = {
      comment: {
        createdBy: "gpamu@evoketechnologies.com", // need to get Login User
        description: text,
        postId: props?.postId,
      },
    };
    setCommentBtnloading(true);
    const res = await settingsService.saveComment(req);
    setText("")
    setCommentBtnloading(false);

    console.log(res);
    if (res?.status === 200) {
      props?.postById(res?.data?.payload);
    }
  };

  const { skip, take } = page;
  return (
    <div className="coment-area">
      <ul className="we-comet">
        <li className="post-comment">
          <div className="comet-avatar">
            <img src="images/resources/comet-1.jpg" alt="" />
          </div>
          <div className="post-comt-box">
            <div>
              <TextArea
                placeholder="Post your comment"
                value={text}
                onChange={(e) => setText(e.target?.value)}
              ></TextArea>
              <Button
                onClick={() => handleComment()}
                loading={commentBtnloading}
                disabled={commentBtnloading}
              >
                Submit
              </Button>
            </div>
          </div>
        </li>
        {props?.comments?.slice(0, 0 + take)?.map((j) => (
          <Comments item={j} />
        ))}
        {props?.comments?.length > 0 && (
          <>
            <li>
              <div className="d-flex justify-content-center align-items-center bz-services-showMore">
                <div ref={showMoreRef}>
                  {props?.comments?.length > take && (
                    <span
                      className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                      onClick={() => handlePageChange()} style={{fontSize:'12px'}}
                    >
                      View More Comments
                    </span>
                  )}
                  {/* {props?.comments?.length <= take &&
                    props?.comments?.length > 2 && (
                      <span
                        className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                        onClick={() => handlePageChange("less")}
                      >
                        View Less
                      </span>
                    )} */}
                </div>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CommentContainer;

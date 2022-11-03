import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useRef, useState } from "react";
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { saveComment } from "../../redux/posts/postSlice";
import settingsService from "../../redux/service";


const CommentContainer = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  const [comments,setComments]=useState(props?.comments)
  const [text,setText]=useState("")
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

  const handleComment=async ()=>{
    const payload={
      body: text, postId: 5, userId: 5
    }
    // dispatch(saveComment(payload))
    const res=await settingsService.saveComment(payload);
    console.log(res)
    if(res?.status===200){
      const res=await settingsService.getPostComments();
      setComments(res?.comments)
    }
  }

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
            <TextArea placeholder="Post your comment"  value={text} onChange={(e)=>setText(e.target?.value)}></TextArea>
            <Button onClick={()=>handleComment()}>Submit</Button>
          </div>
        </div>
      </li>  
      {comments.slice(0, 0 + take)?.map((j) => (
        <Comments item={j} />
      ))}
      <li>
        <div className="d-flex justify-content-center align-items-center bz-services-showMore">
          <div ref={showMoreRef}>
            {comments.length > take && (
              <span
                className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                onClick={() => handlePageChange()}
              >
                View More
              </span>
            )}
            {comments.length <= take && comments.length > 2 && (
              <span
                className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                onClick={() => handlePageChange("less")}
              >
                View Less
              </span>
            )}
          </div>
        </div>
      </li>
     
    </ul>
  </div>
  );
};

export default CommentContainer;

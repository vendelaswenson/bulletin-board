import Card from "../UI/Card"
import './PostItem.css'
import { useState } from "react"
import PostLiked from "./LikedPost"

const PostItem = (props) => {

  const [LikedPost, setLikedPost] = useState(false)

  const stateHandler = () => {

    setLikedPost(true);

  };

    return (
    <Card className="post-item">
      <div className="post-item__question">{props.question}</div>
      <div className="post-item__answer">{props.answer}</div>
      <button className="post-item__btn" onClick={stateHandler} style={{ display: (LikedPost ? 'none' : 'block')}}>Like post</button> 
      {LikedPost ? <PostLiked className="post-item__liked">You have liked this post</PostLiked> : null}
    </Card>
    )
}

export default PostItem



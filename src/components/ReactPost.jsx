
import PostItem from "./PostItem";
import Card from "../UI/Card";


const Posts = (props) => {
  return (
    <Card className="posts">
      {props.items &&
        props.items.map((item) => (
          <PostItem
            question={item.question}
            answer={item.answer}
          />
        ))}
    </Card>
  )
}

export default Posts

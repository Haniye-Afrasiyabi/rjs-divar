import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";

function PostList() {
  const queryKey = ["my-post-list"];
  const queryFn = getPosts;
  const { data } = useQuery({ queryKey, queryFn });
  console.log(data);

  return (
    <div>
      <h1>PostList</h1>
    </div>
  );
}

export default PostList;

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import Loader from "../modules/Loader";

function PostList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const queryKey = ["my-post-list"];
  const queryFn = getPosts;
  const { data, isPending } = useQuery({ queryKey, queryFn });
  console.log(data);

  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        <>
          <h3>آگهی‌های شما</h3>
          {data.data.posts.map((post) => (
            <div key={post._id}>
              <img src={`${baseUrl}${post.images[0]}`} />
              <div>
                <p>{post.title}</p>
                <span>{post.content}</span>
              </div>
              <div>
                <p>{post.createdAt}</p>
                <span>{post.amount} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;

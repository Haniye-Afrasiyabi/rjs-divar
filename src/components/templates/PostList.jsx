import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import Loader from "../modules/Loader";
import { sp } from "src/utils/numbers";

function PostList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const queryKey = ["my-post-list"];
  const queryFn = getPosts;
  const { data, isPending } = useQuery({ queryKey, queryFn });

  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        <>
          <h3 className="mt-14 mb-8 border-b-4 border-[#a62626] w-fit pb-1">
            آگهی‌های شما
          </h3>
          {data.data.posts.map((post) => (
            <div
              key={post._id}
              className="flex items-center border-2 border-[#eaeaea] rounded my-2.5 p-1"
            >
              <img
                src={`${baseUrl}${post.images[0]}`}
                className="w-24 h-20 rounded-sm ml-7 "
              />
              <div className="w-full">
                <p className="text-base">{post.options.title}</p>
                <span className="text-sm text-gray-500">
                  {post.options.content}
                </span>
              </div>
              <div className="w-36 text-center">
                <p className="text-base">
                  {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                </p>
                <span className="text-sm text-gray-500">
                  {sp(post.amount)} تومان
                </span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;

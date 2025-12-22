import { sp } from "src/utils/numbers";

function Main({ posts }) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  console.log(posts);
  return (
    <div className="flex flex-wrap justify-between mt-5 w-[calc(100%-200px)]">
      {posts.data.posts.map((post) => (
        <div
          key={post._id}
          className="w-[330px] flex justify-between border border-[#eaeaea] m-2.5 p-4 rounded-[5px]"
        >
          <div className="flex flex-col justify-between">
            <p className="text-sm">{post.title} </p>
            <div className="text-gray-500 text-base">
              <p>{sp(post.amount)}</p>
              <span>{post.city}</span>
            </div>
          </div>
          <img
            src={`${baseUrl}${post.images[0]}`}
            className="w-[150px] h-[130px] rounded-[3px]"
          />
        </div>
      ))}
    </div>
  );
}

export default Main;

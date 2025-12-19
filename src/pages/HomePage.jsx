import { useQuery } from "@tanstack/react-query";

import { getAllPosts } from "services/user";
import { getCategory } from "src/services/admin";
import Loader from "src/components/modules/Loader";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";

function HomePage() {
  const { data: posts, isPending: postIsPending } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPosts,
  });

  const { data: categories, isPending: categoryIsPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  return (
    <>
      {postIsPending || categoryIsPending ? (
        <Loader />
      ) : (
        <div className="flex">
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;

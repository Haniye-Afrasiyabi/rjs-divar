import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import Loader from "../modules/Loader";

function CategoryList() {
  const queryKey = ["get-categories"];
  const queryFn = getCategory;
  const { data, isPending } = useQuery({ queryKey, queryFn });
  console.log({ data });
  return (
    <div className="mt-12 mb-16">
      {isPending ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div
            key={i._id}
            className="flex my-5 p-4 border-2 border-[#eaeaea] rounded"
          >
            <img src={`${i.icon}.svg`} />
            <h5 className="mr-2.5 text-base w-32">{i.name}</h5>
            <p className="w-full text-left text-[#a62626]">{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;

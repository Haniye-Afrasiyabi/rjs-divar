import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import Loader from "../modules/Loader";

function CategoryList() {
  const queryKey = ["get-categories"];
  const queryFn = getCategory;
  const { data, isPending } = useQuery({ queryKey, queryFn });
//   console.log({ data });
  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;

import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";

function Sidebar() {
  const queryKey = ["get-categories"];
  const queryFn = getCategory;
  const { data } = useQuery({ queryKey, queryFn });

  return (
    <div className="mt-7 w-[200px]">
      <h4>دسته‌ها</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id} className="flex my-5 cursor-pointer">
            <img src={`${category.icon}.svg`} />
            <p className="font-light mr-2.5 text-gray-500">{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

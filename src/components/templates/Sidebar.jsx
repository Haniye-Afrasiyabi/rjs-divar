function Sidebar({ categories }) {
  return (
    <div className="mt-7 w-[200px]">
      <h4>دسته‌ها</h4>
      <ul>
        {categories.data.map((category) => (
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

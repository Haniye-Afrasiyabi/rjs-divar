import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "src/services/admin";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });

  const queryKey = ["get-categories"];
  const queryFn = getCategory;
  const { data } = useQuery({ queryKey, queryFn });
  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
      console.log(event.target);
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form onChange={changeHandler}>
      <h3>افزودن آگهی</h3>

      <label htmlFor="title">عنوان</label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="content">توضیحات</label>
      <textarea
        name="content"
        id="content"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="amount">قیمت</label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="city">شهر</label>
      <input
        type="text"
        name="city"
        id="city"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="category">دسته بندی</label>
      <select
        name="category"
        id="category"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      >
        <option value="">انتخاب کنید</option>
        {data?.data.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="images">عکس</label>
      <input
        type="file"
        name="images"
        id="images"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;

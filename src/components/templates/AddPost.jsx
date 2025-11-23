import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { getCategory } from "src/services/admin";
import { getCookie } from "src/utils/cookie";

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

    const formData = new FormData();

    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <form onChange={changeHandler}>
      <h3 className="mb-7 border-b-4 border-[#a62626] w-fit pb-1">
        افزودن آگهی
      </h3>

      <label htmlFor="title" className="block text-base mb-2.5">
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="content" className="block text-base mb-2.5">
        توضیحات
      </label>
      <textarea
        name="content"
        id="content"
        className="block w-80 p-1 border border-gray-400 rounded mb-7 h-24"
      />

      <label htmlFor="amount" className="block text-base mb-2.5">
        قیمت
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="city" className="block text-base mb-2.5">
        شهر
      </label>
      <input
        type="text"
        name="city"
        id="city"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />

      <label htmlFor="category" className="block text-base mb-2.5">
        دسته بندی
      </label>
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

      <label htmlFor="images" className="block text-base mb-2.5">
        عکس
      </label>
      <input
        type="file"
        name="images"
        id="images"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />
      <button
        onClick={addHandler}
        className="bg-[#a62626] text-white border-none px-6 py-2.5 rounded text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ایجاد
      </button>
    </form>
  );
}

export default AddPost;

import { useState } from "react";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3 className="mb-7 border-b-4 border-[#a62626] w-fit pb-1">
        دسته بندی جدید
      </h3>
      <label htmlFor="name" className="block text-base mb-2.5">
        اسم دسته بندی
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />
      <label htmlFor="slug" className="block text-base mb-2.5">
        اسلاگ
      </label>
      <input
        type="text"
        name="slug"
        id="slug"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />
      <label htmlFor="icon" className="block text-base mb-2.5">
        آیکون
      </label>
      <input
        type="text"
        name="icon"
        id="icon"
        className="block w-80 p-1 border border-gray-400 rounded mb-7"
      />
      <button
        type="submit"
        className="bg-[#a62626] text-white border-none px-6 py-2.5 rounded text-base cursor-pointer"
      >
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;

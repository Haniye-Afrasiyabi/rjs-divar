import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { sendCategory } from "services/admin";

function CategoryForm() {
  const mutationFn = sendCategory;

  const { mutate, data, error, isPending } = useMutation({
    mutationFn,
  });

  // console.log(data);
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  return (
    <form onSubmit={submitHandler} onChange={changeHandler}>
      <h3 className="mb-7 border-b-4 border-[#a62626] w-fit pb-1">
        دسته بندی جدید
      </h3>
      {!!error && (
        <p className="bg-[#a62626] mb-5 text-white p-1 text-center rounded">
          مشکلی پیش آمده است.
        </p>
      )}
      {data?.status === 201 && (
        <p className="bg-[#a62626] mb-5 text-white p-1 text-center rounded">
          دسته بندی با موفقیت اضافه شد.
        </p>
      )}
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
        disabled={isPending}
        className="bg-[#a62626] text-white border-none px-6 py-2.5 rounded text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;

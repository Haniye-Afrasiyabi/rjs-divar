import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "utils/cookie";
function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const navigate = useNavigate();
  const queryKey = ["profile"];
  const queryFn = getProfile;
  const { refetch } = useQuery({ queryKey, queryFn });
  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) console.log(error.response.data.message);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md m-auto flex flex-col mt-24 border border-gray-300 rounded-md p-7"
    >
      <p className="text-base font-normal mb-5">تایید کد اس ام اس شده</p>
      <span className="text-gray text-sm mb-5">
        کد پیامک شده به شماره {mobile} را وارد کنید.
      </span>
      <label htmlFor="input">کد تایید را وارد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="mt-2.5 mb-5 p-1 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-16 py-1 px-2 border-none bg-[#a62626] text-white rounded cursor-pointer"
      >
        ورود
      </button>
      <button
        onClick={() => setStep(1)}
        className="bg-white border border-[#a62626] rounded w-36 mt-7 text-[#a62626]"
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;

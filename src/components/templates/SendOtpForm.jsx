import { sendOtp } from "services/auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(mobile);

    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
    console.log({ response, error });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md m-auto flex flex-col mt-24 border border-gray-300 rounded-md p-7"
    >
      <p className="text-base font-normal mb-5">ورود به حساب کاربری</p>
      <span className="text-gray text-sm mb-5">
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وراد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="mt-2.5 mb-5 p-1 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-28 py-1 px-2 border-none bg-[#a62626] text-white rounded cursor-pointer"
      >
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOtpForm;

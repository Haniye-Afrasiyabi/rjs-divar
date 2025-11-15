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
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;

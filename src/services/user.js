import api from "src/configs/api";
import { getCookie } from "src/utils/cookie";

const getProfile = () => {
  const token = getCookie("accessToken");

  return api.get("user/whoami", {
    headers: { Authorization: `bearer ${token}` },
  });
};
export { getProfile };

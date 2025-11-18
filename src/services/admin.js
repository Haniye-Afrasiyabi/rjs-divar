import api from "configs/api";

const sendCategory = (data) => api.post("category", data);

export { sendCategory };

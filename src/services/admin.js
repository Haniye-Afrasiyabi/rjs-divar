import api from "configs/api";

const sendCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

export { sendCategory, getCategory };

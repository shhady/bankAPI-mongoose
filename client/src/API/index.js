import axios from "axios";

const URL = "http://localhost:8000/users";

export const fetchUsers = () => axios.get(URL);

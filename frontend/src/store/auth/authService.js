import axios from "axios";

const API_URL = "/api/v1/";

// Signup user
const signup = async (userData) => {
  let role;
  if (userData.role === "job hunter") role = "users";
  if (userData.role === "recruiter") role = "recruiters";
  const { data } = await axios.post(`${API_URL}${role}/signup`, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data.data));
  }

  return data.data;
};

// Login user
const login = async (userData) => {
  let role;
  if (userData.role === "job hunter") role = "users";
  if (userData.role === "recruiter") role = "recruiters";
  const { data } = await axios.post(`${API_URL}${role}/login`, userData);

  console.log(data);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data.data));
  }

  return data.data;
};

const updateUser = async (userData) => {
  let role = JSON.parse(localStorage.getItem("user")).role;
  if (role === "job hunter") role = "users";
  if (role === "recruiter") role = "recruiters";

  const { data } = await axios.patch(`${API_URL}${role}/updateMe`, userData);

  const user = data.data.user;

  console.log("data", user);

  const currentUser = {
    ...JSON.parse(localStorage.getItem("user")),
    name: user.name,
    email: user.email,
    photo: user.photo,
  };
  localStorage.setItem("user", JSON.stringify(currentUser));

  return data.data.user;
};

// Fetch User Profile
const fetchUser = async () => {
  let role = JSON.parse(localStorage.getItem("user")).role;
  if (role === "job hunter") role = "users";
  if (role === "recruiter") role = "recruiters";

  const { data } = await axios.get(`${API_URL}${role}/me`);

  return data.data.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  login,
  logout,
  updateUser,
  fetchUser,
};

export default authService;

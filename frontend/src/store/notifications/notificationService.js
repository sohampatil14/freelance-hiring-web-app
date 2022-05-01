import axios from "axios";

const API_URL = "/api/v1/";

// Fetch User
const addNotification = async (addData) => {
  const { data } = await axios.post(`${API_URL}notifications`, addData);

  return data.data;
};

const getNotifications = async () => {
  const { data } = await axios.get(`${API_URL}notifications/me`);

  return data.data.data;
};

const updateNotification = async (id) => {
  const { data } = await axios.get(
    `${API_URL}notifications/updateReadStatus/${id}`
  );

  return data.data.data;
};

const notificationService = {
  addNotification,
  getNotifications,
  updateNotification,
};

export default notificationService;

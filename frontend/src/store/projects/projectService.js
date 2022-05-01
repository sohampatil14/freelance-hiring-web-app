import axios from "axios";
import isEmpty from "../../utils/utils";

const API_URL = "/api/v1/";

// Fetch User
// perpage = 12
const fetchProjects = async ({
  page = "1",
  perPage = "100",
  keyword,
  tags,
}) => {
  let body = {};
  if (!isEmpty(tags)) {
    body = { tags };
  }

  const { data } = await axios.post(
    `${API_URL}projects?page=${page}&limit=${perPage}&keyword=${keyword}`,
    body
  );
  console.log(data);

  return data.data;
};

const fetchProject = async (projectId) => {
  const { data } = await axios.get(`${API_URL}projects/${projectId}`);

  return data.data.data;
};

const authService = {
  fetchProjects,
  fetchProject,
};

export default authService;

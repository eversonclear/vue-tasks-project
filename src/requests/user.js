import apiClient from "@/config/apiClient";

const loginRequest = async (email, password) => {
  const response = await apiClient.post('/login', { email, password });
  return response.data;
}

const meRequest = async () => {
  const response = await apiClient.get('/me');
  return response.data;
}


export {
  loginRequest,
  meRequest
}
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    // Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});

// For Token Based auth, do this in component
// useEffect(() => {
//   const token = localStorage.getItem("token");

//   api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${token}`;

//     return config;
//   });
// }, []);

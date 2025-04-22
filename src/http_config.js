// import axios from "axios";

// // export const apiInstance = "http://192.168.0.45:3000/";//java
// export const apiInstance = "http://localhost:5000/";//node

// export default axios.create({
//   baseURL: apiInstance,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


import axios from "axios";

const baseURL = "http://localhost:5000/";

export const apiInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

import axios from "axios";

function UserLogin(email, password) {
  return axios.post("http://52.79.165.66:8081/user/login", {
    email,
    password,
  });
}

export { UserLogin };

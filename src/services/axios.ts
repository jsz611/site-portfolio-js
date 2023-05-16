import axios from "axios";

interface Dados {
  name?: string;
  email?: string;
  description?: string;
  Data?: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

export const save = (data: Dados) => {
  const config = {
    method: "POST",
    url:apiUrl,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  axios(config)
    .then((r) => {
      console.log(r);
      return true;
    })

    .catch((error) => {
      console.log(error);
    });
};

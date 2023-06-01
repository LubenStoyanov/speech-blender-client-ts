import { FormData } from "../../routes/authentication/Login";

const API_URL: string = import.meta.env.VITE_API_URL;
console.log(API_URL);

export const login = async (formData: FormData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

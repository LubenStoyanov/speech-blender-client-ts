import { FormData } from "../routes/authentication/Login";

export const login = async (formData: FormData) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/login", {
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

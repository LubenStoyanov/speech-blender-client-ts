import { FormData } from "../../routes/authentication/Register";

const API_URL: string = import.meta.env.VITE_API_URL;

export const registerRequest = async (formData: FormData) => {
  try {
    const response = await fetch(`${API_URL}/api/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

import { FormData } from "../routes/authentication/Register";

export const registerRequest = async (formData: FormData) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/register", {
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

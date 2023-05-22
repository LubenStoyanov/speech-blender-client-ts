import { FormData } from "../Register";

export const registerRequest = async (data: FormData) => {
  try {
    const res = await fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "cors",
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

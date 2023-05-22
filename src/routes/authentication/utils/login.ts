import { FormData } from "../Login";

export const login = async (data: FormData) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.message || "An error occurred during login.");
    }

    console.log("Logged in.");

    return response;
  } catch (error) {
    console.error(error);
  }
};

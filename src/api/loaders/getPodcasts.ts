import type { LoaderFunction } from "react-router-dom";

const API_URL: string = import.meta.env.VITE_API_URL;

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${API_URL}/podcast/get/all`, {
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

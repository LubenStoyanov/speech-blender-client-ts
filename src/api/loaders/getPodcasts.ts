import type { LoaderFunction } from "react-router-dom";

const API_URL: string = import.meta.env.VITE_API_URL;

const getPodcasts = async () => {
  try {
    const response = await fetch(`${API_URL}/podcast/get`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const loader: LoaderFunction = async () => {
  const data: [] = await getPodcasts();
  return data;
};

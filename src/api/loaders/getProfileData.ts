import type { LoaderFunction } from "react-router-dom";

const API_URL: string = import.meta.env.VITE_API_URL;

export const getProfileData = async () => {
  try {
    const response = await fetch(`${API_URL}/getProfileData`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const loader: LoaderFunction = async ({ params }) => {
  const { tabName } = params;
  const data: [] = await getProfileData();
  return data;
};

import type { LoaderFunction } from "react-router-dom";

const API_URL: string = import.meta.env.VITE_API_URL;

export const loader: LoaderFunction = async ({ params }) => {
  try {
    console.log(params);
    const response = await fetch(`${API_URL}/podcast/get/${params.podcastId}`, {
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

import { FormData } from "../../routes/podcast/PodcastForm";
const API_URL: string = import.meta.env.VITE_API_URL;

export const createPodcast = async (formData: FormData) => {
  console.log(formData);
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/create/podcast",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
  return formData;
};

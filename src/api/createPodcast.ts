import { FormData } from "../routes/PodcastForm";

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

import { FormData } from "../../routes/podcast/Podcast";

const API_URL: string = import.meta.env.VITE_API_URL;

export const createRecording = async (formData: FormData) => {
  try {
    const data = await fetch(`${API_URL}/createRecording`);
  } catch (error) {
    console.error(error);
  }
};

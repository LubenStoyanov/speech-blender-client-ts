import type { ActionFunction } from "react-router-dom";
import * as yup from "yup";

const API_URL: string = import.meta.env.VITE_API_URL;

const schema = yup.object({
  mediaBlobUrl: yup.string().trim().required("Media blob URL is required."),
});

export type FormData = yup.InferType<typeof schema>;

const createRecording = async (formData: globalThis.FormData) => {
  try {
    const response = await fetch(`${API_URL}/createRecording`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const action: ActionFunction = async ({ request, params }) => {
  const { podcastId } = params;
  if (!podcastId) return null;

  try {
    const formData = await request.formData();
    const mediaBlobUrl = formData.get("mediaBlobUrl");
    if (!mediaBlobUrl) return null;

    const newFormData = new FormData();
    const recordingBlob = await fetch(mediaBlobUrl.toString()).then((r) =>
      r.blob()
    );
    const recordingFile = new File([recordingBlob], "file", {
      type: "audio/,mp3",
    });

    newFormData.append("file", recordingFile);
    newFormData.append("podcastId", podcastId);

    const recording = await createRecording(newFormData);
    console.log(recording);
    return recording;
  } catch (error) {
    console.error(error);
    return error;
  }
};

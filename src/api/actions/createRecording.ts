import { FormData } from "../../routes/podcast/Podcast";
import type { ActionFunction } from "react-router-dom";

const API_URL: string = import.meta.env.VITE_API_URL;

const createRecording = async (formData: globalThis.FormData) => {
  try {
    const data = await fetch(`${API_URL}/createRecording`);
  } catch (error) {
    console.error(error);
  }
};

export const action: ActionFunction = async ({ request, params }) => {
  const { podcastId } = params;
  if (!podcastId) return;

  try {
    const formData = await request.formData();
    const mediaBlobUrl = formData.get("mediaBlobUrl");
    if (!mediaBlobUrl) return;

    const newFormData = new FormData();
    const recordingBlob = await fetch(mediaBlobUrl.toString()).then((r) =>
      r.blob()
    );
    const recordingFile = new File([recordingBlob], "file", {
      type: "audio/,mp3",
    });

    newFormData.append("file", recordingFile);
    newFormData.append("podcastId", podcastId);

    const recording = createRecording(newFormData);
  } catch (error) {
    console.error(error);
  }
};

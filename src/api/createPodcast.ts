export const createPodcast = async (formData: any) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/createPodcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
  return formData;
};

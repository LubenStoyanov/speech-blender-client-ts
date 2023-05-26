const API_URL: string = import.meta.env.VITE_API_URL;

export const validateToken = async () => {
  try {
    const response = await fetch(`${API_URL}/api/v1/validateToken`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

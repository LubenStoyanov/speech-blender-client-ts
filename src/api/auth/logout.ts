const API_URL: string = import.meta.env.VITE_API_URL;

export const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
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

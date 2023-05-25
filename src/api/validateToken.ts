export const validateToken = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/profile", {
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

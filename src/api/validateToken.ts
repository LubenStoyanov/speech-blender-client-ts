export const validateToken = async () => {
  try {
    const response = await fetch("http://localhost:8080/profile", {
      method: "POST",
      mode: "cors",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);
    return data.status === 200;
  } catch (error) {
    console.error(error);
  }
};

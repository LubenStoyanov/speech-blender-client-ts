export const logout = async () => {
  console.log("frontend logout");
  try {
    const response = await fetch("http://localhost:8080/api/v1/logout", {
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

export const login = async (data) => {
  try {
    const res = await fetch(
      // "https://speech-blender-backend-production.up.railway.app/login",
      "http://localhost:8080/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    console.log("login", await res.json());
    // localStorage.setItem("token", JSON.stringify(token));
    return res;
  } catch (error) {
    console.error(error);
  }
};

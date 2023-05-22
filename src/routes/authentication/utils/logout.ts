export const logout = async () => {
  console.log("frontend logout");
  try {
    const res = await fetch(
      // "https://speech-blender-backend-production.up.railway.app/logout",
      "http://localhost:8080/logout",
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );
    return res.ok;
  } catch (error) {
    console.error(error);
  }
};

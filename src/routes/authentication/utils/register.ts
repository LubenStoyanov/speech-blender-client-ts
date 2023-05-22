export const register = async (data) => {
  try {
    const res = await fetch(
      // "https://speech-blender-backend-production.up.railway.app/register",
      "http://localhost:8080/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

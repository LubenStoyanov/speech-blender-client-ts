import { json, redirect } from "react-router-dom";
import { register } from "../utils/register";

const action = async ({ request }: { request: Request }) => {
  try {
    const formData = Object.fromEntries(await request.formData());
    const response = await register(formData);

    if (!response?.ok) {
      return json({ error: "Email already exists." });
    }
    return redirect(`/profile/${formData.username}`);
  } catch (error) {
    console.error(error);
  }
};

export default action;

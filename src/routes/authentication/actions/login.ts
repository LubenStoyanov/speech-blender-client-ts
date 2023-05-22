import { json, redirect } from "react-router-dom";
import { login } from "../utils/login";

const action = async ({ request }: { request: Request }) => {
  try {
    const formData = Object.fromEntries(await request.formData());
    const response = await login(formData);
    console.log(response);
    if (!response?.ok)
      return json({
        error:
          response?.status === 401 ? "Wrong Password" : "Email doesn't exist",
      });

    return redirect(`/profile/${formData.username}`);
  } catch (error) {
    console.error(error);
  }
};

export default action;

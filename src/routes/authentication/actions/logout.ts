import { redirect } from "react-router-dom";
import { logout } from "../utils/logout";

const action = async () => {
  try {
    await logout();
    return redirect("/login");
  } catch (error) {
    console.error(error);
  }
};

export default action;

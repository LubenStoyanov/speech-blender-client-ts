import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../api/logout";

export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  console.log("Render Profile");
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div>
      <h1>{username}</h1>
      <button
        onClick={handleLogout}
        className="border-2 border-black rounded-md"
      >
        Log out
      </button>
    </div>
  );
}

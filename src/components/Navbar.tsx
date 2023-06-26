import { Link, useNavigate, useParams } from "react-router-dom";
import { logout } from "../api/auth/logout";
import { VscSearch, VscSignOut } from "react-icons/vsc";

export default function Navbar() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="border-2 flex justify-around w-full">
      <div>
        <Link to={`/${username ? `${username}/podcasts` : ""}`}>
          <img src="/logo-dark.png" className="w-[2.5rem] my-1" />
        </Link>
      </div>
      <div className="flex my-2">
        <div className="grid place-content-center bg-gray-300 border-2 border-black rounded-tl-full rounded-bl-full placeholder:text-slate-500 px-5">
          <VscSearch />
        </div>
        <input
          className="bg-gray-300 border-2 border-black rounded-tr-full rounded-br-full placeholder:text-slate-500 px-5 focus:outline-none"
          type="text"
          placeholder="Search Speech Blender"
        />
      </div>
      {username && (
        <div className="grid place-content-center">
          <button onClick={handleLogout} className="text-2xl mr-1">
            <VscSignOut />
          </button>
        </div>
      )}
    </nav>
  );
}

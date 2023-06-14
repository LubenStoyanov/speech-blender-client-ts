import { Link } from "react-router-dom";

export default function AuthButtons() {
  return (
    <div>
      <Link to="/login">
        <button className="border-2 border-black rounded-full mx-2 p-2 w-32">
          Log in
        </button>
      </Link>
      <Link to="/register">
        <button className="border-2  border-black rounded-full mx-2 p-2 w-32">
          Sign up
        </button>
      </Link>
    </div>
  );
}

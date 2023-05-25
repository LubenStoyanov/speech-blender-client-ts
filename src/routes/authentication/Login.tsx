import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type FormData = {
  email: string;
  password: string;
  multipleErrorInput: string;
};

type AuthData = {
  success: boolean;
  userId: string;
  username: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const onSubmit = async (formData: FormData) => {
    const { success, username }: AuthData = await login(formData);
    if (success) {
      authContext?.setUser({ username: username });
      navigate(`/${username}`);
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="flex place-content-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="self-center border-2 border-black rounded-md p-10"
      >
        <fieldset className="flex flex-col space-y-5">
          <label className="flex flex-col" htmlFor="email">
            <input
              type="text"
              {...register("email", { required: "Email required" })}
              className="border-2 border-black rounded-md pl-1"
              autoComplete="email"
              placeholder="Email"
            />
            {errors.password?.message && (
              <i className="text-red-500">Email required</i>
            )}
          </label>
          <label className="flex flex-col" htmlFor="password">
            <input
              type="password"
              {...register("password", { required: "Password reqired" })}
              className="border-2 border-black rounded-md pl-1"
              autoComplete="current-password"
              placeholder="Password"
            />
            {errors.password?.message && (
              <i className="text-red-500">Password required</i>
            )}
          </label>
          <button type="submit" className="border-2 rounded-full border-black">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
}

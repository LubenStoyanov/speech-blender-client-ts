import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "./utils/login";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (formData: FormData) => login(formData);

  return (
    <div className="flex place-content-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="self-center border-2 border-black rounded-md p-10"
      >
        <fieldset className="flex flex-col space-y-5">
          <label htmlFor="email">
            <input
              {...register("email")}
              className="border-2 border-black rounded-md pl-1"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              {...register("password")}
              className="border-2 border-black rounded-md pl-1"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              required
            />
          </label>
          <button type="submit" className="border-2 rounded-full border-black">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
}

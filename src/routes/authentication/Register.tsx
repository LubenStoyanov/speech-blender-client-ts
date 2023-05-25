import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerRequest } from "../../api/registerRequest";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type FormData = yup.InferType<typeof schema>;

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  const onSubmit = async (formData: FormData) => {
    const { success } = await registerRequest(formData);
    if (success) {
      navigate("/login");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="flex place-content-center min-h-screen">
      <form
        className="self-center border-2 border-black rounded-md p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col space-y-5">
          <label className="flex flex-col" htmlFor="username">
            <input
              type="text"
              className="border-2 border-black rounded-md pl-1"
              {...register("username", {
                required: "Username required",
              })}
              autoComplete="username"
              placeholder="Username"
            />
            {errors.password?.message && (
              <i className="text-red-500">Username required</i>
            )}
          </label>
          <label className="flex flex-col" htmlFor="email">
            <input
              type="email"
              className="border-2 border-black rounded-md pl-1"
              {...register("email", {
                required: "Email required",
              })}
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
              className="border-2 border-black rounded-md pl-1"
              {...register("password", {
                required: "Password required",
                // minLength: {
                //   value: 8,
                //   message: "Please enter a minimum of 8 characters.",
                // },
              })}
              autoComplete="current-password"
              placeholder="Password"
            />
            {errors.password?.message && (
              <i className="text-red-500">Password required</i>
            )}
          </label>
          <button
            type="submit"
            className="btn border-2 border-black rounded-full p-1"
            onClick={() => console.log("clicked")}
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;

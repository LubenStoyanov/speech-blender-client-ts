import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerRequest } from "./utils/registerRequest";
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
  });

  const onSubmit = async (formData: FormData) => {
    const response = await registerRequest(formData);

    if (response?.ok) {
      navigate("/login");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="Root">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col justify-center m-5">
          <label htmlFor="username">Username</label>
          <input
            {...register("username")}
            type="text"
            name="username"
            autoComplete="username"
            id="username"
            defaultValue="asd"
          />
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            name="email"
            autoComplete="email"
            id="email"
            defaultValue="asd@asd.com"
          />
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            autoComplete="current-password"
            id="password"
            defaultValue="asd"
            minLength={8}
            onInvalid={() => "Please enter minium 8 chracters"}
          />
          <button
            type="submit"
            className="btn border-4 rounded-md border-slate-100 mt-5 p-2"
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;

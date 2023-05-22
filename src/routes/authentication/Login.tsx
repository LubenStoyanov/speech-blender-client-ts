import { Form } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex place-content-center min-h-screen">
      <Form
        method="post"
        action="/login"
        className="self-center border-2 border-black rounded-md p-10"
      >
        <fieldset className="flex flex-col space-y-5">
          <label htmlFor="username">
            <input
              className="border-2 border-black rounded-md pl-1"
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Username"
              required
            />
          </label>
          <label htmlFor="password">
            <input
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
      </Form>
    </div>
  );
}

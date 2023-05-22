import { Form } from "react-router-dom";

export default function Logout() {
  return (
    <div className="flex justify-end">
      <Form method="post" action="/logout">
        <button
          className="btn btn-primary brightness-125 rounded-md  m-2 p-2"
          type="submit"
        >
          Logout
        </button>
      </Form>
    </div>
  );
}

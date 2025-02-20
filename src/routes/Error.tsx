import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return <h1 className="text-center text-3xl">Error...</h1>;
}

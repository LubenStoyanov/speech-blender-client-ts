import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { CiMicrophoneOn } from "react-icons/ci";

const parti = [
  { username: "john" },
  { username: "alice" },
  { username: "jacky" },
];

export default function Podcast() {
  const { title } = useParams();
  return (
    <Layout>
      <h1 className="mt-10 text-4xl font-bold">{title}</h1>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Participants</h2>
        <ul className="flex space-x-5">
          {parti.map((p) => (
            <li key={p.username}>{p.username}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5">MediaRecorder</div>
      <CiMicrophoneOn />
    </Layout>
  );
}

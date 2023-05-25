import Layout from "../components/Layout";
import { CiMicrophoneOn } from "react-icons/ci";
import ProfileTabs from "../components/ProfileTabs";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="border-2 min-h-[95vh] relative">
        <div className="hidden md:flex justify-between">
          <input placeholder="What's on your mind?" className="ml-2" />
        </div>
        <ProfileTabs />
        <button
          type="submit"
          className="border-2 border-black rounded-full fixed bottom-20 right-5 text-2xl p-4"
          onClick={() => navigate("/create/podcast")}
        >
          <CiMicrophoneOn className="w-6 h-6" />
        </button>
      </div>
    </Layout>
  );
}

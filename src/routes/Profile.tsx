import Layout from "../components/Layout";
import { IoMdAddCircleOutline } from "react-icons/io";
import ProfileTabs from "../components/ProfileTabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface PodcastI {
  id: number;
  title: string;
  authorId: number;
  recordings: [];
  createdAt: number;
  likeCount: number;
  contributionCount: number;
}

export default function Profile() {
  const [data, setData] = useState<PodcastI[]>();
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
          className="fixed bottom-16 right-1 p-4"
          onClick={() => navigate("/create/podcast")}
        >
          <IoMdAddCircleOutline className="w-16 h-16" />
        </button>
      </div>
    </Layout>
  );
}

import Navbar from "../components/Navbar";
import AuthNav from "../components/AuthNav";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col place-items-center space-y-20">
        <h1 className="text-2xl md:text-7xl text-center">
          Welcome to Speech Blender
        </h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=QACJitCQI34&ab_channel=SpeechBlender" />
        <AuthNav />
      </div>
    </div>
  );
}

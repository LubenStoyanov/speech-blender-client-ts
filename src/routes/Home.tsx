import Navbar from "../components/Navbar";
import AuthNav from "../components/AuthNav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col place-items-center space-y-20">
        <h1 className="text-2xl md:text-7xl text-center">
          Welcome to Speech Blender
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QACJitCQI34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <AuthNav />
      </div>
    </div>
  );
}

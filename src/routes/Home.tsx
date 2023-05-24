import AuthNav from "../components/AuthNav";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col place-items-center space-y-20">
        <h1 className="text-2xl md:text-7xl text-center">
          Welcome to Speech Blender
        </h1>
        <iframe
          src="https://www.youtube.com/embed/QACJitCQI34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-64"
        />
        <AuthNav />
      </div>
    </Layout>
  );
}

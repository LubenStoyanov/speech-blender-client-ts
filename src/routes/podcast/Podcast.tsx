import { Form, useParams } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";
import Layout from "../../components/Layout";
import { BsRecord2 } from "react-icons/bs";
import { BsStopBtn } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import { IconContext } from "react-icons";

const parti = [
  { username: "john" },
  { username: "alice" },
  { username: "jacky" },
];

export default function Podcast() {
  const { title } = useParams();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      blobPropertyBag: { type: "audio/mp3" },
    });

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
      <div className="flex flex-col gap-y-5 mt-20">
        <div className="flex justify-center gap-y-10">
          <div>
            <button onClick={startRecording}>
              {status === "recording" ? (
                <IconContext.Provider value={{ color: "red", size: "60px" }}>
                  <BsRecord2 />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: "black", size: "60px" }}>
                  <BsRecord2 />
                </IconContext.Provider>
              )}
            </button>
          </div>
          <div className="self-center">
            <button className="btn  " onClick={stopRecording}>
              <IconContext.Provider value={{ color: "black", size: "50px" }}>
                <BsStopBtn />
              </IconContext.Provider>
            </button>
          </div>

          <div className="self-center">
            <Form method="post" encType="multipart/form-data">
              <input
                type="url"
                name="mediabloburl"
                value={mediaBlobUrl}
                readOnly
                hidden
              />
              <button className="btn  rounded-md " type="submit">
                <IconContext.Provider value={{ color: "black", size: "50px" }}>
                  <BiSave />
                </IconContext.Provider>
              </button>
            </Form>
          </div>
        </div>
        <div className="flex justify-center">
          <audio
            // onEnded={playPodcast}
            // src={podcastRecordings.length !== 0 ? podcastRecordings[0].url : ""}
            controls
            src={mediaBlobUrl}
          />
        </div>
      </div>
    </Layout>
  );
}

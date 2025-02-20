import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VscArrowLeft, VscWand } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { createPodcast } from "../../api/actions/createPodcast";
import { useState } from "react";

const schema = yup.object({
  title: yup.string().trim().required(),
});

export type FormData = yup.InferType<typeof schema>;

export default function PodcastForm() {
  const [titleValue, setTitleValue] = useState("");
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (formData: FormData) => {
    const { success, username, title, podcastId } = await createPodcast(
      formData
    );

    if (success) {
      navigate(`/${username}/${title}/${podcastId}`);
    } else {
      navigate("/error");
    }
  };

  return (
    <div>
      <div className="ml-2 pt-2 text-2xl">
        <button onClick={() => navigate(-1)}>
          <VscArrowLeft />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 items-center mt-10"
      >
        <div className="flex space-x-2">
          <div className="mt-1">
            <label htmlFor="title">
              <input
                {...register("title", { required: "Title required" })}
                id="title"
                placeholder="What's on your mind?"
                className="border-2 border-black rounded-full px-5 py-1"
                onChange={(e) => setTitleValue(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              disabled={titleValue ? false : true}
              className={`border-2 border-black rounded-full fixed top-2 right-4 p-2 text-2xl ${
                titleValue ? "" : "opacity-30"
              }`}
            >
              <VscWand />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

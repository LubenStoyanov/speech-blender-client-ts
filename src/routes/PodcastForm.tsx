import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VscArrowLeft, VscWand } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { createPodcast } from "../api/createPodcast";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const schema = yup.object({
  title: yup.string().required(),
});

export type FormData = {
  title: string;
  userId: string | undefined;
};

export default function PodcastForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const onSubmit = async (formData: FormData) => {
    const { success, title, podcastId, username } = await createPodcast(
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
        className="flex flex-col space-y-2 items-center"
      >
        <div className="flex justify-between">
          <label htmlFor="title">
            <input
              {...register("title")}
              placeholder="What's on your mind?"
              className="border-2 border-black rounded-full py-1 px-3"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="border-2 border-black rounded-full p-2 text-2xl"
          >
            <VscWand />
          </button>
        </div>
      </form>
    </div>
  );
}

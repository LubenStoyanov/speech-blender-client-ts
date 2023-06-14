import { useEffect, useState } from "react";
import { z } from "zod";
import { Tab } from "@headlessui/react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PodcastSchema = z.object({
  authorId: z.number(),
  contributionCount: z.number(),
  createdAt: z.date(),
  id: z.number(),
  likeCount: z.number(),
  title: z.string(),
});

const LoaderDataSchema = z.object({
  success: z.boolean(),
  data: z.array(PodcastSchema),
});

type LoaderData = z.infer<typeof LoaderDataSchema>;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const { username } = useParams();
  const { success, data } = useLoaderData() as LoaderData;
  if (!success) throw Error;

  console.log(data);
  const navigate = useNavigate();
  const [categories] = useState({
    Podcasts: data,
    Contributions: data,
    Favorites: data,
  });

  useEffect(() => {
    navigate(`/${username}/podcasts`);
  }, [navigate, username]);

  return (
    <div className="w-96 px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Link
              key={category}
              to={`/${username}/${category.toLowerCase()}`}
              className="w-full"
            >
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-black"
                      : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            </Link>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((podcasts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {podcasts.map((podcast) => (
                  <li
                    key={podcast.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-black text-sm font-medium leading-5">
                      {podcast.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      {/* <li>{podcast.createdAt}</li> */}
                      <li>&middot;</li>
                      <li>{podcast.contributionCount} contributions</li>
                      <li>&middot;</li>
                      <li>{podcast.likeCount} likes</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

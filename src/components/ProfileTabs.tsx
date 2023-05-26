import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const { username } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const [categories] = useState({
    Podcasts: [],
    Contributions: [],
    Favorites: [],
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
              to={`/${username}/${category.toLowerCase()}`}
              className="w-full"
            >
              <Tab
                key={category}
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
                      <li>{podcast.date}</li>
                      <li>&middot;</li>
                      <li>{podcast.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{podcast.likeCount} shares</li>
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

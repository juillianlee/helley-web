import { redirect } from "remix";
import { getSession } from "~/config/session.server";
import MenuHeader from "~/components/Menu/header";
import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/solid";
import HomeContacts from "~/features/Home/Contacts";
import HomeGroupCall from "~/features/Home/GroupCall";
import HomePosts from "~/features/Home/Posts";

export const loader = async ({ request }: any) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) {
    throw redirect("/sign-in");
  }
  return null;
};

const people = [
  {
    name: "Cierra Vega",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Alden Cantrell",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kierra Gentry",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Bradyn Kramer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Thomas Crane",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Miranda Shaffer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Pierre Cox",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Index() {
  return (
    <>
      <MenuHeader />
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8 flex mt-10 pb-10">
        <div className="w-3/12">
          <HomeGroupCall />
          <HomeContacts peoples={people} />
        </div>
        <div className="w-6/12 px-7">
          <HomePosts />
        </div>
        <div className="w-3/12"></div>
      </div>
    </>
  );
}

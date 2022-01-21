import { redirect } from "remix";
import { getSession } from "~/config/session.server";
import MenuHeader from "~/components/Menu/header";
import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/solid";
import HomeContacts from "~/features/Home/Contacts";
import HomeGroupCall from "~/features/Home/GroupCall";
import HomePosts from "~/features/Home/Posts";
import HomeContainer from "~/features/Home/Container";

export const loader = async ({ request }: any) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) {
    throw redirect("/sign-in");
  }
  return null;
};

export default function Index() {
  return <HomeContainer />;
}

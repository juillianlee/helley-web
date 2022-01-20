import { redirect } from "remix";
import { getSession } from "~/config/session.server";
import MenuHeader from "~/components/Menu/header";


export const loader = async ({request}: any) => {
  const session = await getSession(request.headers.get("Cookie"));
  if(!session.has("access_token")) {
    throw redirect("/sign-in");
  }
  return null;
}


export default function Index() {
  return <MenuHeader />
}

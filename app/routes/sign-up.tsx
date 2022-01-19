import axios from "axios";
import CreateAccountContainer from "~/features/Account/Create/CreateAccountContainer";
import styles from "~/styles/login.css";


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}


export const action = async ({ request }: any) => {
  const data = Object.fromEntries(await request.formData());
  const response = await axios.post('http://localhost:3000/sign-up', data)
  console.log(response);
  return null;
};

export default function () {
  return (
    <CreateAccountContainer />
  );
}

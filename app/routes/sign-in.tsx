
import LoginContainer from "~/features/Account/Login/LoginContainer";
import styles from "~/styles/login.css";


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const action = async ({ request }: any) => {
  const data = Object.fromEntries(await request.formData());
  console.log(data);

  return null;
};

export default function () {
  return (
    <LoginContainer />
  );
}

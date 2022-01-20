import axios from "axios";
import { json, redirect } from "remix";
import { commitSession, getSession } from "~/config/session.server";
import { AccountApi } from "~/features/Account";
import LoginContainer from "~/features/Account/Login/LoginContainer";
import styles from "~/styles/login.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const action = async ({ request }: any) => {
  const formData = Object.fromEntries(await request.formData());
  try {
    const response = await AccountApi.signIn({
      username: formData.username,
      password: formData.password,
    });
    const { data } = response;
    
    const session = await getSession(request.headers.get("Cookie"));
    session.set("access_token", data.AccessToken);
    session.set("refresh_token", data.RefreshToken);

    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return json(
        {
          errors: {
            ...err.response.data,
          },
        },
        err.response.status
      );
    }

    return json(
      {
        errors: {
          message: "Falha ao realizar o seu login",
          status: 500,
        },
      },
      500
    );
  }
};

export default function () {
  return <LoginContainer />;
}

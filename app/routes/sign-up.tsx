import axios, { AxiosError } from "axios";
import { json } from "remix";
import { AccountApi } from "~/features/Account";
import CreateAccountContainer from "~/features/Account/Create/CreateAccountContainer";
import styles from "~/styles/login.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const action = async ({ request }: any) => {
  const formData = Object.fromEntries(await request.formData());
  try {
    const response = await AccountApi.signUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    const { data } = response;

    return json({
      message: "Cadastro realizado com sucesso",
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
          message: "Falha ao realizar o cadastro",
          status: 500,
        },
      },
      500
    );
  }
};

export default function () {
  return <CreateAccountContainer />;
}

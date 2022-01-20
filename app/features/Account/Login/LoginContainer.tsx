import LoginForm from "./LoginForm";
import bgLogin from "~/images/login-background.png";
import { Link, useActionData } from "remix";
import AlertError from "~/components/Alerts/AlertError";
import AlertSuccess from "~/components/Alerts/AlertSuccess";

const LoginContainer = () => {
  const actionData = useActionData();
  return (
    <div className="login-container">
      <div className="container mx-auto flex">
        <div className="w-3/12 wrapper-text">
          <h1 className="title">Sign in to </h1>
          <div className="subtitle">Lorem Ipsum is simply </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="w-3/12 wrapper-image">
          <img src={bgLogin} className="login-bg" />
        </div>

        <div className="w-6/12 wrapper-card">
          <div className="card">
            <div className="card-title">
              Welcome to{" "}
              <span className="text-blue-500 font-medium">Helley</span>
            </div>
            <div className="card-subtitle text-5xl font-medium">Sign in</div>
            <div className="mt-8">
              {actionData?.errors && (
                <AlertError message={actionData.errors.message} />
              )}
              {!actionData?.errors && actionData?.message && (
                <AlertSuccess message={actionData.message} />
              )}
            </div>
            <LoginForm />
            <div className="create-account mt-10 text-center text-xl">
              Don’y have an Account? <Link to={"/sign-up"} className="font-bold">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginContainer;
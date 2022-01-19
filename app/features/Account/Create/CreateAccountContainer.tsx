import { Link } from "remix";
import bgLogin from "~/images/login-background.png";
import CreateAccountForm from "./CreateAccountForm";

const CreateAccountContainer = () => {
  return (
    <div className="login-container">
      <div className="container mx-auto flex">
        <div className="w-3/12 wrapper-text">
          <h1 className="title">Sign up to </h1>
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
            <div className="card-subtitle text-5xl font-medium">Sign up</div>
            <CreateAccountForm />
            <div className="create-account mt-10 text-center text-xl">
              You have an register? <Link to={"/sign-in"} className="font-bold">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CreateAccountContainer;
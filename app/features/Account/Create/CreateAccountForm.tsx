import { Form, useTransition } from "remix";

const CreateAccountForm = () => {
  const transition = useTransition();
  return (
    <Form className="flex flex-col mt-8" method="post">
      <div className="form-control">
        <label className="mb-3 block">
          Enter your Name
        </label>
        <input
          type="text"
          name="name"
          className="form-input px-4 py-3 rounded-md w-full"
        />
      </div>
      <div className="form-control mt-8">
        <label className="mb-3 block">
          Enter your email address
        </label>
        <input
          type="email"
          name="email"
          className="form-input px-4 py-3 rounded-md w-full"
        />
      </div>
      <div className="form-control mt-8">
        <label className="mb-3 block">Enter your Password</label>
        <input
          type="password"
          name="password"
          className="form-input px-4 py-3 rounded-md w-full"
        />
      </div>
      <div className="form-control mt-8">
        <label className="mb-3 block">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-input px-4 py-3 rounded-md w-full"
        />
      </div>
      <button
        className={`btn-submit-form ${
          transition.submission ? "cursor-not-allowed" : ""
        }`}
      >
        {transition.submission && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        Sign up
      </button>
    </Form>
  );
};


export default CreateAccountForm;
import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/solid";

const HomeGroupCall = () => {
  return (
    <div className="card px-5 py-10">
      <div className="flex -space-x-1 overflow-hidden justify-center">
        <img
          className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="group-name text-center mt-4 text-xl font-semibold text-gray-700">
        Developer Plan
      </div>
      <div className="group-name text-center mt-2 text-sm text-zinc-400">
        Active Now
      </div>
      <div className="actions flex gap-4 justify-center mt-4">
        <button className=" inline-flex items-center justify-center px-2 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-150">
          <PhoneIcon className="block h-5 w-5 mr-2" /> Call Group
        </button>
        <button className=" inline-flex items-center justify-center px-2 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-150">
          <VideoCameraIcon className="block h-5 w-5 mr-2" /> Video Call
        </button>
      </div>
    </div>
  );
};

export default HomeGroupCall;

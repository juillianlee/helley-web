import {
  PaperAirplaneIcon,
  PaperClipIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

const WritePost = () => {
  return (
    <div className="card p-8 mb-10">
      <div className="uppercase font-semibold text-md">new post</div>
      <hr className="border-separate my-5" />
      <div className="actions flex">
        <div className="text-gray-400 text-sm">
          No que você está pensando, Juillian?
        </div>
        <div className="flex ml-auto gap-4">
          <PaperClipIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          <PhotographIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          <VideoCameraIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          <PaperAirplaneIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500 rotate-45 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default WritePost;

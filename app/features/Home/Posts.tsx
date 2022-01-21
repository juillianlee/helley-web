import { ChatIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Avatar from "~/images/avatar.jpg";


const HomePosts = () => {
  return (
    <ul>
      <li>
        <div className="card">
          <div className="card-header border-solid border-b border-gray-300 px-5 py-6 text-xs">
            <span className="text-sky-600 ">Ted Bell, Annette Nguyen</span> and{" "}
            <span className="text-sky-600 ">Cody Hawkins</span> liked this
          </div>
          <div className="card-body px-7 py-6">
            <div className="person flex gap-4 items-center">
              <img
                src={Avatar}
                width="52"
                height="52"
                className="rounded-full"
              />
              <div className="info">
                <div className="text-md font-semibold">Juillian Lee</div>
                <div className="text-xs">Front-end Developer</div>
              </div>
            </div>
            <div className="content-post mt-6 text-clip overflow-hidden h-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              in lorem enim. Quisque ac viverra ligula, sit amet iaculis velit.
              Suspendisse blandit tortor et metus varius, et bibendum ex
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla facilisi. Etiam tortor mi, pharetra in quam vitae,
              tempus egestas odio. Suspendisse neque felis, fringilla in ex at,
              iaculis rhoncus tellus. Curabitur tortor justo, mattis et justo
              in, mattis viverra ligula. Vestibulum quis ligula sed mauris
              maximus tincidunt.
            </div>
            <div className="text-md font-semibold text-sky-500 uppercase mt-6">
              Read more
            </div>
          </div>
          <div className="card-footer px-7 flex border-solid border-t border-gray-300">
            <div className="like  border-solid border-r border-gray-300 py-6 pr-6 flex items-center gap-2">
              <ThumbUpIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="text-sm font-semibold text-zinc-700">40</span>
            </div>
            <div className="comments p-6 border-solid border-r border-gray-300 flex items-center gap-2">
              <ChatIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="text-sm font-semibold text-zinc-700">6</span>
            </div>
            <div className="shared py-6 pl-6 ml-auto border-solid border-l border-gray-300">
              <ShareIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </div>
          </div>
        </div>
      </li>
      <li className="mt-6">
        <div className="card">
          <div className="card-header border-solid border-b border-gray-300 px-5 py-6 text-xs">
            <span className="text-sky-600 ">Ted Bell, Annette Nguyen</span> and{" "}
            <span className="text-sky-600 ">Cody Hawkins</span> liked this
          </div>
          <div className="card-body px-7 py-6">
            <div className="person flex gap-4 items-center">
              <img
                src={Avatar}
                width="52"
                height="52"
                className="rounded-full"
              />
              <div className="info">
                <div className="text-md font-semibold">Juillian Lee</div>
                <div className="text-xs">Front-end Developer</div>
              </div>
            </div>
            <div className="content-post mt-6 text-clip overflow-hidden h-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              in lorem enim. Quisque ac viverra ligula, sit amet iaculis velit.
              Suspendisse blandit tortor et metus varius, et bibendum ex
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla facilisi. Etiam tortor mi, pharetra in quam vitae,
              tempus egestas odio. Suspendisse neque felis, fringilla in ex at,
              iaculis rhoncus tellus. Curabitur tortor justo, mattis et justo
              in, mattis viverra ligula. Vestibulum quis ligula sed mauris
              maximus tincidunt.
            </div>
            <div className="text-md font-semibold text-sky-500 uppercase mt-6">
              Read more
            </div>
          </div>
          <div className="card-footer px-7 flex border-solid border-t border-gray-300">
            <div className="like  border-solid border-r border-gray-300 py-6 pr-6 flex items-center gap-2">
              <ThumbUpIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="text-sm font-semibold text-zinc-700">40</span>
            </div>
            <div className="comments p-6 border-solid border-r border-gray-300 flex items-center gap-2">
              <ChatIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="text-sm font-semibold text-zinc-700">6</span>
            </div>
            <div className="shared py-6 pl-6 ml-auto border-solid border-l border-gray-300">
              <ShareIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </div>
          </div>
        </div>
      </li>
      <li className="mt-6">
        <div className="card">
          <div className="card-header border-solid border-b border-gray-300 px-5 py-6 text-xs">
            <span className="text-sky-600 ">Ted Bell, Annette Nguyen</span> and{" "}
            <span className="text-sky-600 ">Cody Hawkins</span> liked this
          </div>
          <div className="card-body px-7 py-6">
            <div className="person flex gap-4 items-center">
              <img
                src={Avatar}
                width="52"
                height="52"
                className="rounded-full"
              />
              <div className="info">
                <div className="text-md font-semibold">Juillian Lee</div>
                <div className="text-xs">Front-end Developer</div>
              </div>
            </div>
            <div className="content-post mt-6 text-clip overflow-hidden h-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              in lorem enim. Quisque ac viverra ligula, sit amet iaculis velit.
              Suspendisse blandit tortor et metus varius, et bibendum ex
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla facilisi. Etiam tortor mi, pharetra in quam vitae,
              tempus egestas odio. Suspendisse neque felis, fringilla in ex at,
              iaculis rhoncus tellus. Curabitur tortor justo, mattis et justo
              in, mattis viverra ligula. Vestibulum quis ligula sed mauris
              maximus tincidunt.
            </div>
            <div className="text-md font-semibold text-sky-500 uppercase mt-6">
              Read more
            </div>
          </div>
          <div className="card-footer px-7 flex border-solid border-t border-gray-300">
            <div className="like  border-solid border-r border-gray-300 py-6 pr-6 flex items-center gap-2">
              <ThumbUpIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="text-sm font-semibold text-zinc-700">40</span>
            </div>
            <div className="comments p-6 border-solid border-r border-gray-300 flex items-center gap-2">
              <ChatIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="text-sm font-semibold text-zinc-700">6</span>
            </div>
            <div className="shared py-6 pl-6 ml-auto border-solid border-l border-gray-300">
              <ShareIcon className="block h-5 w-5 text-gray-400 hover:text-blue-500  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HomePosts;

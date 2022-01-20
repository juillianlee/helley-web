import { redirect } from "remix";
import { getSession } from "~/config/session.server";
import MenuHeader from "~/components/Menu/header";
import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/solid";

export const loader = async ({ request }: any) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) {
    throw redirect("/sign-in");
  }
  return null;
};

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Index() {
  return (
    <>
      <MenuHeader />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex mt-10 pb-10">
        <div className="w-3/12">
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
          <section className="contacts mt-10">
            <div className="title text-zinc-600 text-2xl font-normal mb-2">
              Online Contacts
            </div>
            <div className="card p-0">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="w-6/12 px-7">
          <div className="card px-5 py-10">
            <>
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
            </>
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
          <section className="contacts mt-10">
            <div className="title text-zinc-600 text-2xl font-normal mb-2">
              Online Contacts
            </div>
            <div className="card p-0">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="w-3/12">
          <div className="card px-5 py-10">
            <>
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
            </>
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
          <section className="contacts mt-10">
            <div className="title text-zinc-600 text-2xl font-normal mb-2">
              Online Contacts
            </div>
            <div className="card p-0">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

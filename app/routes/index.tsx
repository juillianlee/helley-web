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
    name: "Cierra Vega",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Alden Cantrell",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kierra Gentry",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Bradyn Kramer",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Thomas Crane",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Miranda Shaffer",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Pierre Cox",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
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
                    <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="border-blue-400 border-solid border-2 h-12 w-12 rounded-full flex items-center justify-center">
                              <img
                                className="h-10 w-10 rounded-full "
                                src={person.image}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="ml-6">
                            <div className="text-md text-stone-500">
                              {person.name}
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
          <div className="card">
            <div className="mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 py-10">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Sample Post Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="bg-gray-100 rounded-lg"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="bg-gray-100 rounded-lg"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="bg-gray-100 rounded-lg"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="bg-gray-100 rounded-lg"
                />
              </div>
            </div>
          </div>
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
                      <td className="px-6 py-4 whitespace-nowra">
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

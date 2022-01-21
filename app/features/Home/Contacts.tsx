export interface HomeContractsProps {
  peoples: {
    name: string;
    image: string;
  }[];
}

const HomeContacts = ({ peoples }: HomeContractsProps) => {
  return (
    <section className="contacts mt-10">
      <div className="title text-zinc-600 text-xl font-normal mb-2">
        Contacts
      </div>
      <div className="card p-0">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {peoples.map((person, index) => (
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
  );
};

export default HomeContacts;

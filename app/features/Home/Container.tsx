import MenuHeader from "~/components/Menu/header";
import HomeContacts from "./Contacts";
import HomePersonalInfo from "./PersonalInfo";
import Avatar from "~/images/avatar.jpg";
import WritePost from "./WritePost";
import HomePosts from "./Posts";

const people = [
  {
    name: "Cierra Vega",
    image: Avatar,
  },
  {
    name: "Alden Cantrell",
    image: Avatar,
  },
  {
    name: "Kierra Gentry",
    image: Avatar,
  },
  {
    name: "Bradyn Kramer",
    image: Avatar,
  },
  {
    name: "Thomas Crane",
    image: Avatar,
  },
  {
    name: "Miranda Shaffer",
    image: Avatar,
  },
  {
    name: "Pierre Cox",
    image: Avatar,
  },
];

const HomeContainer = () => {
  return (
    <>
      <MenuHeader />
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8 flex mt-10 pb-10">
        <div className="w-3/12">
          <HomePersonalInfo />
          {/* <HomeContacts peoples={people} /> */}
        </div>
        <div className="w-9/12 px-7">
          <WritePost />
          <HomePosts />
        </div>
        {/* <div className="w-3/12"></div> */}
      </div>
    </>
  );
};

export default HomeContainer;

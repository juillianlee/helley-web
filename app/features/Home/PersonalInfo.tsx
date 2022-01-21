import CoverPersonalInfo from "~/images/home/cover-personal-info-default.png";
import Avatar from "~/images/avatar.jpg";

const HomePersonalInfo = () => {
  return (
    <div className="card relative">
      <div className="card-header">
        <img src={CoverPersonalInfo} width="100%" className="rounded-t-lg" />
      </div>
      <div className="card-body mt-10 p-5 pb-10">
        <img
          src={Avatar}
          height={100}
          width={100}
          className="rounded-full absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white"
        />
        <div className="fullname text-zinc-800 text-center text-2xl font-semibold">
          Juillian Lee
        </div>
        <div className="info text-zinc-900 text-center mt-4 text-sm">
          Tenho 30 anos e 11 anos de experiência no mundo de desenvolvimento,
          grande parte do meu conhecimento é focado em Javascript.
        </div>
      </div>
    </div>
  );
};

export default HomePersonalInfo;

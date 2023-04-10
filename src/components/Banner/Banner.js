import person from "../../assets/Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="mb-20 flex items-center">
      <div>
        <h1 className="mb-4 text-7xl font-bold">
          One Step <br className="my-2" /> Closer To Your
          <br className="my-2" />
          <span className="text-indigo-400">Dream Job</span>
        </h1>
        <p className="mb-4 text-base text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 px-4 py-4 text-xl font-bold text-white">
          Get Started
        </button>
      </div>
      <div>
        <img src={person} alt="Person" />
      </div>
    </div>
  );
};

export default Banner;

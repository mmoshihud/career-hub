import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";

const Featured = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-4xl font-bold">Featured Jobs</h1>
        <p className="mb-8 text-base font-medium text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        {props.jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg border-2 border-gray-300 p-10"
          >
            <img className="mb-4" src={job.logo} alt="Logo" />
            <h1 className="mb-4 text-2xl font-bold">{job.job_title}</h1>
            <p className="mb-4 text-lg text-gray-500">{job.company_name}</p>
            <span class="mr-2 inline-block rounded border-2 border-indigo-400 px-2 py-1 text-base font-bold text-indigo-400">
              {job.type}
            </span>
            <span class="inline-block rounded border-2 border-indigo-400 px-2 py-1 text-base font-bold text-indigo-400">
              Full-Time
            </span>

            <p className="my-4 text-gray-500">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              {job.location}
              <FontAwesomeIcon
                icon={faCircleDollarToSlot}
                className="ml-2 mr-2"
              />
              {job.salary}
            </p>
            <button className="rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 p-3 text-base font-bold text-white">
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 px-8 py-4 text-xl font-bold text-white">
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default Featured;

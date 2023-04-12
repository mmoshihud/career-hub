import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faCalendar,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);
  const job = jobs.find((job) => job.id === jobId);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobHandler = () => {
    setAppliedJobs((prevState) => [...prevState, job]);
    console.log(appliedJobs);
  };

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      {job && (
        <div>
          <div className="flex justify-center">
            <h1 className="p-28 text-4xl font-extrabold">{job.job_title}</h1>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="mb-4 text-xl font-bold">Job Description:</h1>
              <p className="mb-4 text-xl">{job.description}</p>
              <h1 className="mb-4 text-xl font-bold">Job Responsibility:</h1>
              <p className="mb-4 text-xl">{job.responsibility}</p>
              <h1 className="mb-4 text-xl font-bold">
                Educational Requirements:
              </h1>
              <p className="mb-4 text-xl">{job.requirements}</p>
              <h1 className="mb-4 text-xl font-bold">Experiences:</h1>
              <p className="mb-4 text-xl">{job.experience}</p>
            </div>
            <div className="border-1 rounded-lg border-gray-300 bg-indigo-50 p-10">
              <h1 className="mb-4 text-xl font-bold">Job Details</h1>
              <div className="mb-2 text-base">
                <span className="mr-2 inline-block text-indigo-400">
                  <FontAwesomeIcon icon={faCircleDollarToSlot} />
                </span>
                <span className="inline-block">
                  <p className="font-bold text-gray-700">Salary: &nbsp;</p>
                </span>
                <span className="inline-block text-gray-600">{job.salary}</span>
              </div>
              <div className="text-base">
                <span className="mr-2 inline-block text-indigo-400">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                <span className="inline-block">
                  <p className="font-bold text-gray-700">Job Title: &nbsp;</p>
                </span>
                <span className="inline-block text-gray-600">
                  {job.job_title}
                </span>
              </div>
              <h1 className="my-4 text-xl font-bold">Contact Information</h1>
              <div className="mb-2 text-base">
                <span className="mr-2 inline-block text-indigo-400">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="inline-block">
                  <p className="font-bold text-gray-700">Phone: &nbsp;</p>
                </span>
                <span className="inline-block text-gray-600">{job.phone}</span>
              </div>
              <div className="mb-2 text-base">
                <span className="mr-2 inline-block text-indigo-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="inline-block">
                  <p className="font-bold text-gray-700">Email: &nbsp;</p>
                </span>
                <span className="inline-block text-gray-600">{job.email}</span>
              </div>
              <div className="mb-2 text-base">
                <span className="mr-2 inline-block text-indigo-400">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className="inline-block">
                  <p className="font-bold text-gray-700">Address: &nbsp;</p>
                </span>
                <span className="inline-block text-gray-600">
                  {job.location}
                </span>
              </div>
            </div>
            <button
              onClick={jobHandler}
              className="col-start-3 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 px-4 py-4 text-xl font-bold text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;

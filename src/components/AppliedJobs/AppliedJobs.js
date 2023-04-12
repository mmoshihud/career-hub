import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const AppliedJobs = () => {
  const [jobs, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredJob, setFilteredJob] = useState("Remote");

  useEffect(() => {
    fetch("featured.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("job-cart");
    const savedCart = [];

    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }

    for (const id in shoppingCart) {
      const savedProduct = jobs.find((job) => job.id === id);
      const quantity = shoppingCart[id];
      if (savedProduct) {
        savedProduct.quantity = quantity;
        savedCart.push(savedProduct);
      }
    }
    setCart(savedCart);
  }, [jobs]);

  const dropdownChangeHandler = (event) => {
    setFilteredJob(event.target.value);
  };
  return (
    <>
      <div className="flex justify-end">
        <select
          className="mb-4 rounded-lg p-4 text-base font-bold text-gray-500"
          name="cars"
          id="cars"
          onChange={dropdownChangeHandler}
        >
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      {cart.map((job) => (
        <div
          key={job.id}
          className="border-1 mb-4 grid grid-cols-10 items-center rounded-lg border-2 border-gray-300 p-10"
        >
          <div>
            <img src={job.logo} alt="" />
          </div>
          <div className="col-span-8">
            <h1 className="mb-4 text-2xl font-bold">{job.job_title}</h1>
            <p className="mb-4 text-lg text-gray-500">{job.company_name}</p>
            <span className="mr-2 inline-block rounded border-2 border-indigo-400 px-2 py-1 text-base font-bold text-indigo-400">
              {job.type}
            </span>
            <span className="inline-block rounded border-2 border-indigo-400 px-2 py-1 text-base font-bold text-indigo-400">
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
          </div>
          <div>
            <Link
              to={`/job-details/${job.id}`}
              className="rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 p-3 text-base font-bold text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJobs;

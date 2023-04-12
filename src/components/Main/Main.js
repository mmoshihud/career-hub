import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Main = () => {
  // const jobs = useLoaderData();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <Banner />
      <Category />
      {jobs.length > 0 ? <Featured jobs={jobs} /> : ""}
    </>
  );
};

export default Main;

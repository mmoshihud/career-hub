import { useEffect } from "react";
import { useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Main = () => {
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

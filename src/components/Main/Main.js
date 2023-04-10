import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Main = () => {
  const jobs = useLoaderData();
  return (
    <>
      <Banner />
      <Category />
      <Featured jobs={jobs} />
    </>
  );
};

export default Main;

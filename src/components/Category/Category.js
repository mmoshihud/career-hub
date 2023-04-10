import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-4xl font-bold">Job Category List</h1>
        <p className="mb-8 text-base font-medium text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="mb-20 flex justify-center gap-x-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg border-2 bg-indigo-50 p-10"
          >
            <img className="mb-6" src={category.image} alt="accounts" />
            <h1 className="mb-4 text-xl font-bold">{category.name}</h1>
            <p className="text-base font-medium text-gray-500">
              {category.jobs_count} Jobs available
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;

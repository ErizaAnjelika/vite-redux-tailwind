import { useSelector } from "react-redux";

const Card = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <a
        href="#"
        className="block max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions {count}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of {count}</p>
      </a>
    </div>
  );
};

export default Card;
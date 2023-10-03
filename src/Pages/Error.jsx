import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-[500px] flex flex-col justify-center items-center space-y-5">
      <h1 className="text-7xl text-red-700 font-bold">404 </h1>
      <p className="text-5xl text-red-700 font-bold">Page Not Found</p>
      <div>
        <Link to="/">
          <button className=" w-36 px-4 py-2 bg-green-600 hover:bg-green-800 font-bold text-center text-white shadow-xl rounded-md ">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

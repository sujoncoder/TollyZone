import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const AllServices = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-bold text-slate-400">
        Our Services
      </h1>

      <div className="grid grid-cols-4 gap-4 my-10">
        <Link
          className="flex justify-center items-center space-x-2 border p-2 rounded hover:bg-slate-200 duration-500 text-lg text-slate-500 font-semibold"
          href="/thumbnaildownload"
        >
          <FaDownload />
          <span>YT-Thumbnail-Downloader</span>
        </Link>

        <Link
          className="flex justify-center items-center space-x-2 border p-2 rounded hover:bg-slate-200 duration-500 text-lg text-slate-500 font-semibold"
          href="/githubuser"
        >
          <FaDownload />
          <span>GitHub User</span>
        </Link>
      </div>
    </div>
  );
};

export default AllServices;

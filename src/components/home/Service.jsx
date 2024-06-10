import Link from "next/link";

const Service = ({ service }) => {
  const { tittle, icon, link } = service;
  return (
    <Link
      className="border-2 rounded flex flex-col items-center space-y-4 shadow hover:bg-slate-200 duration-500 py-4"
      href={link}
    >
      <div className="text-5xl text-slate-500">{icon}</div>
      <h2 className="text-lg">{tittle}</h2>
    </Link>
  );
};

export default Service;

import Link from "next/link";

const QrService = ({ qrservice }) => {
  const { title, icon, link } = qrservice;
  return (
    <Link
      className="border-2 rounded-lg flex justify-center items-center  space-x-2 hover:border-blue-200 duration-300 p-2 bg-white"
      href={link}
    >
      {icon}
      <span className="hidden sm:block">{title}</span>
    </Link>
  );
};

export default QrService;

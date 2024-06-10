import { BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";

// id generator
const id = crypto.randomUUID();

const AllServiceData = [
  {
    id: id,
    tittle: "YTT-Download",
    icon: <FaDownload />,
    link: "/thumbnaildownload",
  },
  {
    id: id,
    tittle: "Github User",
    icon: <BsGithub />,
    link: "/githubuser",
  },
  {
    id: id,
    tittle: "Qr Generator",
    icon: <IoQrCodeOutline />,
    link: "/qrcode",
  },
];

export default AllServiceData;

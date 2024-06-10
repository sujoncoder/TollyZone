import { BsChatText, BsPersonVcard, BsWhatsapp } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdOutlineMarkEmailRead, MdOutlineSms } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
// Define icon size
const iconSize = "w-6 h-6 text-slate-700";
// id generator
const id = crypto.randomUUID();

const qrServiceDate = [
  {
    id: id,
    title: "URL",
    icon: <TbWorldWww className={iconSize} />,
    link: "wow",
  },
  {
    id: id,
    title: "Text",
    icon: <BsChatText className={iconSize} />,
    link: "wow",
  },
  {
    id: id,
    title: "Wifi",
    icon: <FaWifi className={iconSize} />,
    link: "wow",
  },
  {
    id: id,
    title: "vCard",
    icon: <BsPersonVcard className={iconSize} />,
    link: "wow",
  },
  {
    id: id,
    title: "Email",
    icon: <MdOutlineMarkEmailRead className={iconSize} />,
    link: "wow",
  },
  {
    id: id,
    title: "SMS",
    icon: <MdOutlineSms className={iconSize} />,
    link: "wow",
  },
  {
    id: id,
    title: "Whatsapp",
    icon: <BsWhatsapp className={iconSize} />,
    link: "wow",
  },
];

export default qrServiceDate;

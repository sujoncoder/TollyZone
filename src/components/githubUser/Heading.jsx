import Image from "next/image";
import CoderImage from "../../../public/assets/coder.png";

const Heading = () => {
  return (
    <Image
      className="bg-cyan-100 rounded-full"
      src={CoderImage}
      width={50}
      height={50}
      alt="coder image"
    />
  );
};

export default Heading;

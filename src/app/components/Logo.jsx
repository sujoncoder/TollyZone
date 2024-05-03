import Image from "next/image";
import LogoImage from "../../../public/logo.png";

const Logo = () => {
  return <Image src={LogoImage} width={150} height={150} alt="logo" />;
};

export default Logo;

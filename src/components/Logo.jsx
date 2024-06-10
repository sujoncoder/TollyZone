import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col py-2 cursor-pointer">
      <Image src={LogoImage} width={50} height={50} alt="logo" />
    </Link>
  );
};

export default Logo;

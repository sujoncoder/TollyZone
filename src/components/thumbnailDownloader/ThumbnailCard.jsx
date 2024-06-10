import { saveAs } from "file-saver";
import Image from "next/image";
import ThumbnailImage from "../../../public/assets/Thumbnail.png";
import CustomBtn from "../shared/CustomBtn";

const ThumbnailCard = ({ onThumbnailUrl, onVideoId }) => {
  const handleDownload = () => {
    saveAs(onThumbnailUrl, "thumbnail.jpg");
  };
  return (
    <div className="my-10 flex justify-center items-center">
      <div className="rounded border-slate-500 relative">
        <Image
          className="rounded shadow"
          src={onThumbnailUrl || ThumbnailImage}
          width={700}
          height={700}
          quality={100}
          alt="ThumbnailImage"
        />

        {/* Use onClick instead of onclick and call handleDownload */}

        <div onClick={handleDownload} className="absolute top-2 right-2">
          <CustomBtn myStyle={"active:bg-blue-400"}>Download</CustomBtn>
        </div>
      </div>
    </div>
  );
};
export default ThumbnailCard;

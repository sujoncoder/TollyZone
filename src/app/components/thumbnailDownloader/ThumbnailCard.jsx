import Image from "next/image";
// import ThumbnailImage from "../../../../public/assets/Thumbnail.png"
import ThumbnailImage from "../../../../public/assets/Thumbnail.png";

const ThumbnailCard = () => {
  return (
    <div className="my-10 flex justify-center items-center">
      <div className="rounded border-slate-500">
        <Image
          className="rounded shadow-xl hover:scale-105 duration-500"
          src={ThumbnailImage}
          width={500}
          height={500}
          alt="ThumbnailImage"
        />
      </div>
    </div>
  );
};

export default ThumbnailCard;

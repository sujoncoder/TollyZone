import QrInput from "@/components/qrCode/QrInput";
import QrServices from "@/components/qrCode/QrServices";
import QrZone from "@/components/qrCode/QrZone";

const QrPage = () => {
  return (
    <div className="w-full sm:w-2/3 md:w-3/4 px-2 mx-auto my-4 sm:my-10">
      <div className="grid grid-cols-12 gap-4 sm:border-2 border-none rounded">
        <div className="col-span-12 sm:col-span-8">
          <QrServices />
          <QrInput />
        </div>
        <div className="col-span-12 sm:col-span-4">
          <QrZone />
        </div>
      </div>
    </div>
  );
};

export default QrPage;

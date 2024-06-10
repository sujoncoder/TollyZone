import qrServiceDate from "@/utils/qrServiceData";
import QrService from "./QrService";

const QrServices = () => {
  return (
    <div className="flex flex-wrap gap-2 bg-slate-100 p-2 sm:p-4 rounded shadow">
      {qrServiceDate.map((qrservice) => (
        <QrService key={qrservice.id} qrservice={qrservice} />
      ))}
    </div>
  );
};

export default QrServices;

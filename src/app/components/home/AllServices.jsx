import AllServiceData from "@/app/utils/allServiceData";
import Service from "./Service";

const AllServices = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-bold text-slate-400">
        Our Services
      </h1>

      {/* all service map and sent data to service component  */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
        {AllServiceData.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;

import { dateConverter } from "@/app/utils/date";

const UserInfo = ({ onUserData }) => {
  const date = dateConverter("created_at");
  return (
    <div className="flex justify-between py-6">
      <div className="flex space-x-4">
        {/* <Image
          className="bg-white rounded-full border-4 border-slate-500"
          src="avatar_url"
          width={80}
          height={80}
          alt="user profile pic"
        /> */}

        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-slate-500">
            {onUserData.name}
          </h3>
          <span className="text-blue-500">login</span>
        </div>
      </div>

      <div>
        <p className="text-slate-600">Joined</p>
        <span>date</span>
      </div>
    </div>
  );
};

export default UserInfo;
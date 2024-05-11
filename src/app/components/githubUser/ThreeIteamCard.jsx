const ThreeIteamCard = ({ onUserData }) => {
  return (
    <div className="rounded border shadow flex justify-around items-center my-6 py-4">
      {/* Repositories */}
      <div>
        <h2 className="text-lg font-medium text-slate-500">Repositories</h2>
        <span className="pl-6">{onUserData.public_repos}</span>
      </div>

      {/* Followers */}
      <div>
        <h2 className="text-lg font-medium text-slate-500">Followers</h2>
        <span className="pl-6">{onUserData.followers}</span>
      </div>

      {/* Following */}
      <div>
        <h2 className="text-lg font-medium text-slate-500">Following</h2>
        <span className="pl-6">{onUserData.following}</span>
      </div>
    </div>
  );
};

export default ThreeIteamCard;

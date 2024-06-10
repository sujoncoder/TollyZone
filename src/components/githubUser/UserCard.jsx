import Bio from "./Bio";
import FooterInfo from "./FooterInfo";
import ThreeIteamCard from "./ThreeIteamCard";
import UserInfo from "./UserInfo";
import UserSkills from "./UserSkills";

const UserCard = ({ onUserData }) => {
  return (
    <div>
      <UserInfo onUserData={onUserData} />
      <Bio onUserData={onUserData} />
      <UserSkills onUserData={onUserData} />
      <ThreeIteamCard onUserData={onUserData} />
      <FooterInfo onUserData={onUserData} />
    </div>
  );
};

export default UserCard;

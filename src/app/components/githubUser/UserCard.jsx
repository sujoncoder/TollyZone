import Bio from "./Bio";
import FooterInfo from "./FooterInfo";
import ThreeIteamCard from "./ThreeIteamCard";
import UserInfo from "./UserInfo";
import UserSkills from "./UserSkills";

const UserCard = ({ onUserData }) => {
  console.log(onUserData);
  return (
    <div>
      <UserInfo onUserData={onUserData} />
      <Bio />
      <UserSkills />
      <ThreeIteamCard />
      <FooterInfo />
    </div>
  );
};

export default UserCard;

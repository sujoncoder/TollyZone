const Bio = ({ onUserData }) => {
  return (
    <div className="my-4">
      <h1 className="my-1 text-xl font-medium">Bio</h1>
      <p>{onUserData.bio}</p>
    </div>
  );
};

export default Bio;

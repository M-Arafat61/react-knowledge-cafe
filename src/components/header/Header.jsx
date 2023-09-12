import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h3 className="text-3xl font-semibold ">Knowledge Cafe </h3>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;

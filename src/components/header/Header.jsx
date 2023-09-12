import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="pb-8">
      <div className="flex justify-between items-center p-4 md:flex max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold ">Knowledge Cafe </h3>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;

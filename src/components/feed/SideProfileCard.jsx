import backgroundImage from "../../assets/bg2.svg";
import logoIcon from "../../assets/logo-icon.svg";
import planeLogo from "../../assets/planeLogo.svg";

const SideProfileCard = ({ user }) => {
  return (
    <div className="relative bg-white shadow rounded overflow-hidden mb-4 pb-4">
      {/* Background Image */}
      <div className="relative w-full h-[140px] bg-gray-100">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* White Card Area (User Info) */}
      <div className="relative bg-white px-6 pt-14 z-10 text-center">
        {/* Profile Image with Overlap */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
          <img
            className="w-[100px] h-[100px] rounded-full border-4 border-white object-cover"
            src={user.profileImage}
            alt={`${user.name}'s avatar`}
          />
        </div>

        {/* User Info */}
        <div className="mt-2">
          {/* User Name and Logo */}
          <div className="flex justify-center items-center mb-1">
            <h2 className="text-[14px] font-semibold text-[#181818] mr-2">
              {user.name}
            </h2>
            <img src={logoIcon} alt="Logo" className="w-[12px] h-[12px]" />
          </div>

          {/* Occupation Title and Description */}
          <p className="text-[#181818] text-[10px] font-medium">
            {user.occupation.title}
          </p>
          <p className="text-[#181818] text-[10px] max-w-md leading-[20px]">
            {user.occupation.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideProfileCard;

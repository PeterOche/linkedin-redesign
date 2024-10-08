// Assuming the background image, logo, and other assets are imported
import backgroundImage from "../../assets/background-image.svg";
import logoIcon from "../../assets/logo-icon.svg";
import editIcon from "../../assets/edit.svg"; // Edit profile icon
import moreIcon from "../../assets/more-vertical.svg"; // Vertical dots (More options) icon
import planeLogo from "../../assets/planeLogo.svg";
import uploadIcon from "../../assets/upload.svg"; // Share icon
import BlueButton from "./BlueButton";
import TransparentBtn from "./TransparentBtn";

const ProfileCard = ({ user }) => {
  return (
    <div className="relative bg-white shadow rounded overflow-hidden  mb-4">
      {/* Background Image */}
      <div className="relative w-full h-48">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
        {/* Share Icon on the Left */}
        <div className="absolute top-4 left-4">
          <button className="bg-[#ffffff] opacity-90 px-3 py-3 rounded ">
            <img src={uploadIcon} alt="Share" className="w-[16px] h-[16px]" />
          </button>
        </div>

        {/* Edit and More Options Icons on the Right */}
        <div className="absolute top-4 right-4 flex items-center space-x-3 ">
          <button className="flex items-center text-[12px] justify-around bg-[#FFFFFF] px-2 py-2 rounded">
            <img
              src={editIcon}
              alt="Edit Profile"
              className="w-[12px] h-[12px] mr-1"
            />
            EDIT PROFILE
          </button>
          <button className="bg-[#ffffff] px-2 py-[6px] rounded">
            <img
              src={moreIcon}
              alt="More Options"
              className="w-[24px] h-[24px] "
            />
          </button>
        </div>
      </div>

      {/* White Card Area (User Info) */}
      <div className="relative bg-white p-6 pt-8 z-10">
        {/* Profile Image with Overlap */}
        <div className="absolute -top-12 left-6">
          <img
            className="w-[170px] h-[170px] rounded-full border-4 border-white"
            src={user.profileImage}
            alt={`${user.name}'s avatar`}
          />
        </div>

        {/* User Info */}
        <div className="mt-[120px] lg:ml-[220px] lg:mt-0">
          {/* Offset to avoid overlapping the profile image */}
          <div className=" md:flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-[18px] font-bold text-[#181818] mr-2">
                {user.name}
              </h2>
              <img src={logoIcon} alt="Logo" className="w-[16px] h-[16px]" />{" "}
              {/* Logo */}
            </div>
            <p className="text-gray-600 text-sm flex items-center">
              <img
                src={planeLogo}
                className="w-[12.67px] h-[12.67px] mr-[8px]"
              ></img>
              {user.location}
            </p>
          </div>

          <p className="text-gray-600 text-[14px] max-w-lg leading-[21px]">
            {user.occupation.title}, {user.occupation.description}
          </p>
          <div className="py-6 flex space-x-4 items-center bg-white overflow-clip">
            <BlueButton>CONTACT INFO</BlueButton>

            <TransparentBtn>{user.connections} Connections</TransparentBtn>
          </div>
        </div>
      </div>

      {/* Bottom Section with Buttons */}
    </div>
  );
};

export default ProfileCard;

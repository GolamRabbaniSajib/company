import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGlobe } from "react-icons/fa";

const TeamMemberCard = ({ image, name, email, bio }) => {
  return (
    <div className="w-[260px] bg-[#EBF6F6] text-gray-800 rounded-2xl overflow-hidden shadow-xl p-4 flex flex-col items-center">
      {/* Avatar */}
      <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Email */}
      <p className="text-sm text-[#26d782] mb-2">{email}</p>

      {/* Bio */}
      <p className="text-xs text-gray-600 text-center mb-4 px-2">
        {bio}
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 text-gray-500 text-sm">
        <FaInstagram className="hover:text-black transition" />
        <FaFacebookF className="hover:text-black transition" />
        <FaTwitter className="hover:text-black transition" />
        <FaGlobe className="hover:text-black transition" />
      </div>
    </div>
  );
};

export default TeamMemberCard;

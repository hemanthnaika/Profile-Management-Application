import Link from "next/link";

import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import { Profile } from "@/type";

const Card = ({ profileInfo }: { profileInfo: Profile }) => {
  return (
    <Link href={`/profile/${profileInfo.id}`} className="block">
      <div className="group max-w-sm rounded-2xl bg-secondary relative overflow-hidden card shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer">
        <div className="h-36 bg-primary"></div>

        <Image
          src={profileInfo.avatar}
          width={32}
          height={32}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover absolute top-16 left-1/2 -translate-x-1/2 border-4 border-secondary z-10"
        />

        <div className="bg-secondary h-40 mt-9 flex flex-col items-center justify-center gap-2">
          <h1 className="font-adamina font-bold text-md tracking-wider">
            {profileInfo.name}
          </h1>

          <h2 className="font-adamina text-xs font-medium text-gray-600">
            {profileInfo.gender} | {profileInfo.age} | {profileInfo.pronouns}
          </h2>
          <h3 className="font-roboto text-sm">{profileInfo.bio}</h3>
          <div className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-3 border border-primary rounded-full px-5 py-2 mt-3 bg-white/80 backdrop-blur-sm">
            <ArrowDownToLine className="w-4 h-4 text-primary" />
            <span className="font-roboto font-bold text-xs text-primary">
              Download My Resume
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

import { profile } from "@/assets/icons";
import CaseSlider from "@/components/CaseSlider";
import Connect from "@/components/Connect";
import CustomLayout from "@/components/CustomLayout";
import { cases, profileInfo, skills } from "@/constants";
import { SingleProfileResponse } from "@/type";
import {
  ArrowDownToLine,
  ArrowLeft,
  Mail,
  Pause,
  Phone,
  Play,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfileDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/profiles/${id}`,
  );
  const data: SingleProfileResponse = await res.json();

  return (
    <div>
      <CustomLayout>
        <Link
          href="/"
          className="bg-primary w-10  flex items-center justify-center mb-1 rounded-full p-2 text-white hover:bg-primary/90 transition-all duration-300"
        >
          <ArrowLeft className="text-white h-5 w-5" />
        </Link>
      </CustomLayout>
      <div className="bg-[linear-gradient(92.41deg,#F58232_5.32%,#EE4D3B_94.98%)] h-52 relative ">
        <CustomLayout>
          <Image
            src={data.data.avatar}
            width={44}
            height={44}
              unoptimized
            alt="Profile"
            className="w-44 h-44 rounded-full  absolute -bottom-20 left-1/2 transform -translate-x-1/2 border-5 border-white"
          />

          <div className=" pt-10 md:pt-32 flex items-center justify-between">
            <div className="flex items-center gap-5 md:gap-10">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-5 h-5" />
                <span className="font-roboto text-sm font-bold">Email</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <span className="font-roboto text-sm font-bold">Phone</span>
              </div>
            </div>
            <div className=" transition-all duration-300 flex items-center gap-3 border border-white rounded-full px-5 py-2 mt-3 text-white hover:bg-white hover:text-primary">
              <ArrowDownToLine className="w-4 h-4 " />
              <span className="font-roboto font-bold text-xs ">
                Download My Resume
              </span>
            </div>
          </div>
        </CustomLayout>
      </div>
      <CustomLayout>
        <div className="mt-32 ">
          <div className="text-center">
            <h1 className="font-roboto font-bold text-xl tracking-wider">
              {data.data.name}
            </h1>
            <h6 className="font-adamina text-xs font-medium">
              {data.data.gender} | {data.data.age} | {data.data.pronouns}
            </h6>
          </div>

          <div className="bg-primary rounded-full  py-2 text-white mx-auto mt-10 w-80 flex items-center gap-3 justify-center cursor-pointer hover:bg-primary/90 transition-all duration-300">
            <div>
              <div className="bg-white rounded-full p-2">
                <Play className="text-primary w-5 h-5" />
              </div>
            </div>
            <div>
              <h5 className="font-roboto font-medium">
                Watch my Visual Resume Now
              </h5>
            </div>
          </div>
        </div>

        <div className="border-2 border-[#E8E8ED] p-5 rounded-lg mt-10 flex flex-col md:flex-row  gap-3 text-center">
          {profileInfo.map((info, i) => (
            <p key={i} className="font-roboto text-md font-medium">
              {info}
            </p>
          ))}
        </div>

        <div className="mt-10 font-adamina text-sm text-gray-700">
          <p className="text-center leading-relaxed">
            I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru
            (2024-2026), with a BTech in Electronics & Communication (CGPA
            7.95). I bring 35 months of experience, including boosting system
            scalability by 30% and earning the Rise Insta Award at Infosys for
            enhancing backend efficiency by 25%.
          </p>
          <p className="text-center leading-relaxed mt-8">
            I have developed Python-based analytics tools during internships and
            drove a 20% rise in donations through strategic social media
            campaigns. Certified in SQL, Python, Java, and IoT, I have also
            delivered impactful projects like a ReactJS prototype for
            accessibility and a QR-based attendance system. My achievements in
            national contests showcase both my technical expertise and creative
            problem-solving.
          </p>
        </div>

        <div className="flex items-center gap-5 mt-10 flex-wrap justify-center">
          {skills.map((skill, i) => (
            <Image
              key={i}
              src={skill}
              alt="Skill"
              width={80}
              height={80}
              className="w-20 h-20 object-contain grayscale opacity-40 
                 hover:grayscale-0 hover:opacity-100 
                 transition-all duration-300"
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-adamina">
              Case Insights & <br /> Key Projects
            </h1>
          </div>

          <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit font-adamina">
            <button className="px-5 py-2 text-sm font-medium rounded-full bg-white text-gray-900 shadow-sm transition">
              Case Studies
            </button>
            <button className="px-5 py-2 text-sm font-medium rounded-full text-gray-500 hover:text-gray-900 transition">
              Projects
            </button>
          </div>
        </div>

        <CaseSlider cases={cases} />

        <div className="mt-10">
          <h1 className="text-center mb-10 text-2xl font-adamina font-bold">
            Visual Resume
          </h1>
          <div className="w-full flex  justify-center">
            <div className="relative w-full max-w-4xl h-105 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={data.data.avatar}
                alt="Video thumbnail"
                fill
                className="object-cover"
                priority
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Bottom Controls */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between font-adamina">
                {/* Left - YouTube */}
                <div className="flex items-center gap-2 text-white">
                  <div className=" rounded-md p-1">
                    <Youtube className="w-10 h-10" />
                  </div>
                  <span className="font-semibold text-md">YouTube</span>
                </div>

                {/* Right - Controls */}
                <div className="flex items-center gap-3">
                  {/* Pause Button */}
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition">
                    <Pause size={20} />
                  </button>

                  {/* Watch Button */}
                  <button className="px-5 py-3 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium hover:bg-white/30 transition">
                    Watch the Full Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomLayout>
      <Connect data={data} />
    </div>
  );
};

export default ProfileDetails;

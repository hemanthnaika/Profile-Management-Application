import { SingleProfileResponse } from "@/type";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

const Connect = ({data}:{data:SingleProfileResponse}) => {
  return (
    <div className="w-full bg-[#faf9f7] py-20 px-6 mt-5">
      <div className="max-w-8xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-orange-400 via-orange-500 to-red-500" />

          <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Connect with {data.data.name}
            </h2>

            <div className="mt-6 flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              <Download size={18} />
              Download My Resume
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm font-roboto">
        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="font-bold">Email</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="font-bold">Phone</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 transition font-bold">
            <Github size={16} />
            GitHub
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 transition font-bold">
            <Linkedin size={16} />
            LinkedIn
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400 font-bold">
        © 2024 MAHE BLRU
      </div>
    </div>
  );
};

export default Connect;

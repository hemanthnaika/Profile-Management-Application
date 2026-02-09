import { logo_one, logo_two } from "@/assets/icons";
import CustomLayout from "@/components/CustomLayout";
import Image from "next/image";

const Navbar = () => {
  return (
    <CustomLayout>
      <nav className="py-5 flex items-center justify-between">
        <Image
          src={logo_one}
          alt="Logo"
          className="w-auto h-5 md:h-10 object-cover"
        />
        <Image
          src={logo_two}
          alt="Logo"
          className="w-auto h-5 md:h-10 object-cover"
        />
      </nav>
    </CustomLayout>
  );
};

export default Navbar;

import Card from "@/components/Card";
import CustomLayout from "@/components/CustomLayout";
import { Profile, ProfilesResponse } from "@/type";


const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/profiles`,
    { cache: "no-store" }
  );

  const data: ProfilesResponse = await res.json();

  return (
    <CustomLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16 justify-center">
        {data.data.map((profile: Profile) => (
          <Card key={profile.id} profileInfo={profile} />
        ))}
      </div>
    </CustomLayout>
  );
};

export default Home;

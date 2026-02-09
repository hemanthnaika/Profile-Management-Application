import Card from "@/components/Card";
import CustomLayout from "@/components/CustomLayout";

const Home = () => {
  return (
    <CustomLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </CustomLayout>
  );
};

export default Home;

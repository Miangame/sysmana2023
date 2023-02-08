import HomeDescription from "@/components/home/HomeDescription/HomeDescription";
import { HomePageWrapper } from "@/components/home/Home.styled";
import HomePhoto from "@/components/home/HomePhoto/HomePhoto";
import HomeTags from "@/components/home/HomeTags/HomeTags";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePhoto />
      <HomeDescription />
      <HomeTags />
    </HomePageWrapper>
  );
};

export default HomePage;

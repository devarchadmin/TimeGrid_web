//@refresh
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/components/layouts/DefaultWrapper";
import HomeMainArea from "@/components/pagesUI/apps/home/HomeMainArea";

const Home = () => {
  return (
    <>
      <MetaData pageTitle="Time Grid Admin Dashboard">
        <Wrapper>
          <HomeMainArea />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default Home;

import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../navbar";
import TopSection from "./topSection";

const PageContainer = styled.div`
  ${tw`
        flex
        items-center
        flex-col
        h-full
        w-full
        overflow-x-hidden 
     `};
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
};

export default HomePage;

import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../navbar";

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
    </PageContainer>
  );
};

export default HomePage;

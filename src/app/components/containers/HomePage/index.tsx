import styled from "styled-components";
import tw from "twin.macro";

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
  return <PageContainer>HomePage</PageContainer>;
};

export default HomePage;

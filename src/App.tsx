import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import HomePage from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;

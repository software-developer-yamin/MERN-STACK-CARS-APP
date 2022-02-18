import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
     w-full
     max-w-2xl
     flex
     flex-row
     items-center
     lg:px-12
     justify-between
  `};
`;
const LogoContainer = styled.div``;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </NavbarContainer>
  );
}

export default Navbar;

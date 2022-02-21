import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
      flex
      list-none
    `};
`;
const ListItem = styled.li<{ menu?: any }>`
  ${tw`
      text-xs
      md:text-base
      text-black
      font-medium
      mr-1
      md:mr-5
      cursor-pointer
      transition
      duration-300
      ease-in-out
      hover:text-gray-700
    `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-white
    text-xl
    mb-3
    focus:text-white
    `}
    `};
`;

function NavbarItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <ListItem menu>
            <a href="#">Home</a>
          </ListItem>
          <ListItem menu>
            <a href="#">Cars</a>
          </ListItem>
          <ListItem menu>
            <a href="#">Services</a>
          </ListItem>
          <ListItem menu>
            <a href="#">Contact Us</a>
          </ListItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <ListItem>
        <a href="#">Home</a>
      </ListItem>
      <ListItem>
        <a href="#">Cars</a>
      </ListItem>
      <ListItem>
        <a href="#">Services</a>
      </ListItem>
      <ListItem>
        <a href="#">Contact Us</a>
      </ListItem>
    </ListContainer>
  );
}

export default NavbarItems;

import tw from "twin.macro";
import styled from "styled-components";
import logo from "../../../assets/images/logo.png";

const NavbarContainer = styled.header`
  ${tw`flex justify-center mt-6 mx-6`}
`;

const NavbarContentContainer = styled.div`
  ${tw`flex flex-1 flex-row justify-between max-w-6xl items-center`}
`;

const NavBarItem = styled.li`
  :hover {
    margin-bottom: -2px;
  }
  ${tw`
  border-black
    mx-2 cursor-pointer 
    hover:border-b-2
  `}
`;

const NavBarItemContainer = styled.ul`
  ${tw`list-none flex`}
`;

const Logo = styled.img`
  ${tw`
    w-10
    h-10
  `}
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContentContainer>
        <a href="/">
          <Logo src={logo} />
        </a>
        <NavBarItemContainer>
          {["Rooms", "Features"].map((item, index) => (
            <NavBarItem key={index}>{item}</NavBarItem>
          ))}
        </NavBarItemContainer>
      </NavbarContentContainer>
    </NavbarContainer>
  );
};

export default Navbar;

import tw from "twin.macro";
import styled from "styled-components";
import banner from "../../../assets/images/banner.png";
import LoginForm from "./LoginForm";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

const ContentSection = styled.section`
  ${tw`flex justify-center mt-6 mx-6`}
`;

const ContentContainer = styled.div`
  ${tw`
    flex flex-row mt-12 mx-6 items-center max-w-6xl justify-between
  `}
`;

const LeftAsideContainer = styled.div`
  ${tw`w-96 break-words self-start`}
`;

const LeftAsideHeading = styled.h1`
  background-image: linear-gradient(
    83.84deg,
    #0088ff -6.87%,
    #a033ff 26.54%,
    #ff5c87 58.58%
  );
  ${tw`text-7xl text-left bg-clip-text text-transparent font-medium`}
`;

const LeftAsideParagraph = styled.p`
  ${tw`mt-4 text-opacity-70 text-gray-600`}
`;

const RightAsideContainer = styled.div`
  ${tw`w-auto max-w-2xl`}
`;

const Banner = styled.img`
  ${tw`w-full`}
`;

const Content = () => {
  const [isLoginFormDisplay, setIsLoginFormDisplay] = useState(true);

  const onOptionClick = () => setIsLoginFormDisplay((prev) => !prev);

  return (
    <ContentSection>
      <ContentContainer>
        <LeftAsideContainer>
          <LeftAsideHeading>Hang out anytime, anywhere</LeftAsideHeading>
          <LeftAsideParagraph>
            Messenger makes it easy and fun to stay close to your favorite
            people.
          </LeftAsideParagraph>
          {isLoginFormDisplay ? (
            <LoginForm onOptionClick={onOptionClick} />
          ) : (
            <RegisterForm onOptionClick={onOptionClick} />
          )}
        </LeftAsideContainer>

        <RightAsideContainer>
          <Banner src={banner} />
        </RightAsideContainer>
      </ContentContainer>
    </ContentSection>
  );
};

export default Content;

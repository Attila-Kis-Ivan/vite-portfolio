import TypeWriter from "./TypeWriter";
import homeImage from "../../assets/images/home-img.svg";
import {
  HomeSection,
  Greeting,
  HomeContent,
  HeaderTextContainer,
  HeaderText,
  Im,
  MainName,
  NameContainer,
  TypeWriterContainer,
  HeroImageContainer,
  HeroImage,
} from "./Home.style";

const HomeItem = () => {
  return (
    <HomeSection>
      <HomeContent>
        <HeaderTextContainer>
          <HeaderText>
            Hi There!
            <Greeting> 👋🏻 </Greeting>
          </HeaderText>
          <NameContainer>
            <Im>I&apos;m </Im>
            <MainName> Attila Kis-Ivan</MainName>
          </NameContainer>
          <TypeWriterContainer>
            <TypeWriter />
          </TypeWriterContainer>
        </HeaderTextContainer>
        <HeroImageContainer>
          <HeroImage src={homeImage} alt="home" />
        </HeroImageContainer>
      </HomeContent>
    </HomeSection>
  );
};

export default HomeItem;

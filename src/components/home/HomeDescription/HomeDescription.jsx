import {
  Name,
  StyledParagraph,
  HomeDescriptionWrapper,
} from "./HomeDescription.styled";

const HomeDescription = () => {
  return (
    <HomeDescriptionWrapper>
      <Name>Hi! I am Jhon Doe</Name>
      <StyledParagraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem,
        ab consequatur sed natus, aspernatur ullam qui ut doloremque
        consequuntur voluptatum! Assumenda, et consequatur. Possimus totam
        perspiciatis nostrum asperiores!
      </StyledParagraph>
      <StyledParagraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem,
        ab consequatur sed natus, aspernatur ullam qui ut doloremque
        consequuntur voluptatum! Assumenda, et consequatur. Possimus totam
        perspiciatis nostrum asperiores!
      </StyledParagraph>
    </HomeDescriptionWrapper>
  );
};

export default HomeDescription;

const { HOME_TAGS } = require("@/constants/homeTags");
const { Tag, Wrapper, TagsContainer } = require("./HomeTags.styled");

const HomeTags = () => {
  return (
    <Wrapper>
      <TagsContainer>
        {HOME_TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    </Wrapper>
  );
};

export default HomeTags;

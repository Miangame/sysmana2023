import { HOME_TAGS } from "@/constants/homeTags";
import { HomeTagsWrapper, Tag, TagsContainer } from "./HomeTags.styled";

const HomeTags = () => {
  return (
    <HomeTagsWrapper>
      <TagsContainer>
        {HOME_TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    </HomeTagsWrapper>
  );
};

export default HomeTags;

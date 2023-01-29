import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 8px;
`;

export const Tag = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
`;

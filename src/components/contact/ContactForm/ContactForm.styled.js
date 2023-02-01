import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Title = styled.h2`
  width: 50%;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Input = styled.input`
  margin-bottom: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #000;
  outline: none;
`;

export const TextArea = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #000;
  margin-bottom: 50px;
  outline: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3f3f3f;
  }
`;

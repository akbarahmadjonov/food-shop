import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: max-content;
`;

export const WrapperDiv = styled.div`
  padding: 17px;
`;

export const PropTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
`;

export const PropParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: #e0e6e9;
`;

export const InpDiv = styled.div``;

export const Input = styled.input`
  &:focus {
    box-shadow: 0 0 10px 0 #ea7c69, 0 8px 24px -8px #ea7c69;
  }
  padding: 10px 25px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #fff;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  transition: all 0.1s ease-out;
`;

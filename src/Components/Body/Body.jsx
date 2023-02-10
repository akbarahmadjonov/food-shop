import searchDes from "../../assets/images/search.svg";

import {
  InpDiv,
  Input,
  PropParagraph,
  PropTitle,
  Wrapper,
  WrapperDiv,
} from "./Body.style";

export const Body = () => {
  return (
    <>
      <Wrapper>
        <WrapperDiv>
          <PropTitle>Jaegar Resto</PropTitle>
          <PropParagraph>Tuesday, 2 Feb 2021</PropParagraph>
        </WrapperDiv>
        <InpDiv>
          <Input
            type="search"
            name="search"
            placeholder="Search for food, coffee, etc..."
          />
        </InpDiv>
      </Wrapper>
    </>
  );
};

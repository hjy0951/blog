import React from "react";
import styled from "@emotion/styled";

const HeaderLayout = styled.header`
  top: 0px;
  width: 100%;
  height: 4rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;

export const Header = () => {
  return (
    <HeaderLayout>
      <a href="/">
        <p>Heojoooon</p>
      </a>
      <Buttons>
        <a href="https://github.com/hjy0951">
          <p>GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%ED%97%88-159288250/">
          <p>LinkedIn</p>
        </a>
        <a href="https://www.instagram.com/heojoooon/">
          <p>instagram</p>
        </a>
        <button>Mode</button>
      </Buttons>
    </HeaderLayout>
  );
};

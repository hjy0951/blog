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

export const Header = () => {
  return (
    <HeaderLayout>
      <a href="/">
        <p>Heojoooon</p>
      </a>
      <button>Mode</button>
    </HeaderLayout>
  );
};

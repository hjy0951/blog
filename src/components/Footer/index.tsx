"use client";

import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}. Heojoooon all rights reserved.
    </StyledFooter>
  );
};

import styled from "@emotion/styled";
import React from "react";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CurrentTagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: flex-end;
`;

interface Props {
  tagData: [string, number][];
}

export const Tags = ({ tagData }: Props) => {
  return (
    <ListWrapper>
      <CurrentTagWrapper>
        <h2>currentTags</h2>
        <p>{"(" + ")"}</p>
      </CurrentTagWrapper>
      {/* <div>{tags}</div> */}
    </ListWrapper>
  );
};

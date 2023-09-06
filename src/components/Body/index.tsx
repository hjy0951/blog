"use client";

import { Items } from "@/types";
import { Tags } from "./TagList";

interface Props {
  tagData: [string, number][];
  allPosts: Items[];
}

export const Body = ({ tagData, allPosts }: Props) => {
  console.log(allPosts);
  return (
    <main>
      <Tags tagData={tagData} />
      {allPosts.map((post, idx) => (
        <div key={idx}>{post.slug}</div>
      ))}
    </main>
  );
};

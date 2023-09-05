"use client";

import { Items } from "@/types";

interface Props {
  tags: string[];
  allPosts: Items[];
}

export const Body = ({ tags, allPosts }: Props) => {
  console.log(allPosts);
  return (
    <main>
      <div>{tags}</div>
      {allPosts.map((post, idx) => (
        <div key={idx}>{post.slug}</div>
      ))}
    </main>
  );
};

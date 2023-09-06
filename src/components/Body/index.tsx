"use client";

import { Items } from "@/types";
import { Tags } from "./TagList";
import { PostCard } from "./PostCard";

interface Props {
  tagData: [string, number][];
  allPosts: Items[];
}

export const Body = ({ tagData, allPosts }: Props) => {
  console.log(allPosts);
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col gap-8">
          <Tags tagData={tagData} />
          <div>
            <section className="grid gap-4 grid-cols-2">
              {allPosts.map((post) => {
                return (
                  <PostCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    tags={post.tags}
                    createdAt={post.createdAt}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

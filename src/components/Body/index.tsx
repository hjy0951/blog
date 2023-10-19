import { Items } from "types";
import { Tags } from "@components/TagList";
import { PostCard } from "@components/PostCard";

interface Props {
  tagData: [string, number][];
  allPosts: Items[];
  selected?: string;
}

export const Body = ({ tagData, allPosts, selected }: Props) => {
  console.log(allPosts);
  if (selected !== undefined) {
    allPosts = allPosts.filter((post) => post.tags[0] === selected);
  }
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

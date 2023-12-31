import { Items } from "@/types";
import Tags from "@/components/TagList";
import PostCard from "../PostCard";

interface Props {
  tagData: [string, number][];
  allPosts: Items[];
  selected?: string;
}

const Body = ({ tagData, allPosts, selected }: Props) => {
  if (selected !== undefined) {
    allPosts = allPosts.filter((post) => post.tags[0] === selected);
  }
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div
          className="flex flex-col gap-6 items-center justify-center"
          style={{ width: "80rem" }}
        >
          <Tags tagData={tagData} selected={selected} />
          <div>
            <div className="text-2xl font-bold leading-loose dark:text-white">
              <p>Posts</p>
            </div>
            <section className="grid gap-2 grid-cols-4 relative">
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

export default Body;

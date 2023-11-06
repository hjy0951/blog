import Body from "@/components/Body";
import { getAllPosts, getPostTagsAndEachCount } from "@/libs/api";

export default function Home() {
  const tagData = getPostTagsAndEachCount();
  const posts = getAllPosts([
    "slug",
    "title",
    "description",
    "tags",
    "createdAt",
  ]);

  return <Body tagData={tagData} allPosts={posts} />;
}

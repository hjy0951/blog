import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllPosts, getPostTags } from "@/util/api";

export default function Home() {
  const tags = getPostTags();
  const posts = getAllPosts([
    "slug",
    "title",
    "description",
    "thubnail",
    "tags",
    "createdAt",
  ]);
  return (
    <>
      <Header />
      <Body tags={tags} allPosts={posts} />
      <Footer />
    </>
  );
}

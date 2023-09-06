import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllPosts, getPostTagsAndEachCount } from "@/util/api";

export default function Home() {
  const tagData = getPostTagsAndEachCount();
  const posts = getAllPosts([
    "slug",
    "title",
    "description",
    "thumbnail",
    "tags",
    "createdAt",
  ]);
  return (
    <>
      <Header />
      <Body tagData={tagData} allPosts={posts} />
      <Footer />
    </>
  );
}

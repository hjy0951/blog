import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllPosts } from "@/util/api";

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

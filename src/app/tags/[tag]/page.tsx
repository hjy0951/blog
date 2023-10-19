import { Items } from "@/types";
import { Tags } from "@/components/TagList";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getPostTagsAndEachCount } from "@/libs/api";
import { Body } from "@/components/Body";

interface Props {
  params: { tag: string };
}

export default function Page({ params }: Props) {
  const { tag } = params;
  const tagData = getPostTagsAndEachCount();
  const posts = getAllPosts([
    "slug",
    "title",
    "description",
    "tags",
    "createdAt",
  ]);
  return <Body tagData={tagData} allPosts={posts} selected={tag} />;
}

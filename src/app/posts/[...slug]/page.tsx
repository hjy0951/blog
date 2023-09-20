import { Post } from "@/components/Post";
import { getPostBySlug } from "@/utils/api";

interface Props {
  params: { slug: string[] };
}

export default function Page({ params }: Props) {
  const { slug } = params;
  console.log(slug);
  const postData = getPostBySlug(slug.join("/"), [
    "title",
    "tags",
    "createdAt",
    "content",
  ]);

  return (
    <>
      <Post slug={slug[1]} postData={postData} />
    </>
  );
}

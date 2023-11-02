import Giscus from "@/components/GiscusComments";
import { Post } from "@/components/Post";
import { getPostBySlug } from "@/libs/api";

interface Props {
  params: { slug: string[] };
}

export default function Page({ params }: Props) {
  const { slug } = params;
  const postData = getPostBySlug(slug.join("/"), [
    "title",
    "tags",
    "createdAt",
    "content",
  ]);

  return (
    <>
      <Post slug={slug[1]} postData={postData} />
      <div className="w-full flex items-center justify-center">
        <Giscus />
      </div>
    </>
  );
}

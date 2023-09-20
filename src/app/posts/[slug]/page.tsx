import { getPostBySlug } from "@/utils/api";

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  const { slug } = params;
  const data = getPostBySlug(slug, [
    "title",
    "thumbnail",
    "tags",
    "createdAt",
    "content",
  ]);
  return <div>slug: {slug}</div>;
}

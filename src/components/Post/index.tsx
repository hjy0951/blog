import { Items } from "@/types";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  slug: string;
  postData: Items;
}

export const Post = ({ slug, postData }: Props) => {
  const { title, tags, createdAt, content } = postData;

  return (
    <main className="flex flex-col items-center">
      <div className=" max-w-screen-md flex flex-col gap-10">
        <div className="text-3xl">{title}</div>
        <div className="flex flex-col items-start">
          {tags.map((tag: string, index: number) => (
            <div key={index}>{tag}</div>
          ))}
          <div>{createdAt}</div>
        </div>

        <div>
          <Image
            src={`/contents/${tags[0]}/${slug}/cover.png`}
            width={700}
            height={500}
            alt="Post Thumbnail"
          />
        </div>
        <MDXRemote source={content} />
      </div>
    </main>
  );
};
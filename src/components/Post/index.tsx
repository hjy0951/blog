import { Items } from "@/types";
import Image from "next/image";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { yeongdeokSea } from "@/styles/font";
import { DateFormat } from "./DateFormat";
import { processedTagName } from "@/libs/constants";
import { Suspense } from "react";
import rehypePrism from "rehype-prism-plus";

interface Props {
  slug: string;
  postData: Items;
}

const getCompiledContent = async (content: string) => {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: { rehypePlugins: [rehypePrism] },
    },
  });
  return compiledContent;
};

export const Post = async ({ slug, postData }: Props) => {
  const { title, tags, createdAt, content } = postData;

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-screen-md flex flex-col gap-10 items-center">
        <div className={`${yeongdeokSea.className} flex flex-col gap-5 w-full`}>
          <div className="flex justify-center">
            <div className="text-3xl">{title}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            {tags.map((tag: string, index: number) => (
              <div
                key={index}
                className="py-0.5 pr-2 pl-2 rounded-md border border-solid shadow-inner"
              >
                <span className="underline underline-offset-4 decoration-wavy decoration-red-600">
                  {processedTagName[tag]}
                </span>
              </div>
            ))}
            <DateFormat createdAt={createdAt} />
            {/* <div>{createdAt}</div> */}
          </div>
        </div>
        <div>
          <Image
            src={`/contents/${tags[0]}/${slug}/cover.png`}
            width={480}
            height={320}
            alt="Post Thumbnail"
          />
        </div>
        <article className="prose max-w-3xl">
          <Suspense fallback={<div>loading...</div>}>
            {getCompiledContent(content)}
          </Suspense>
        </article>
      </div>
    </main>
  );
};

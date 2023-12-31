import rehypePrism from "rehype-prism-plus";
import Image from "next/image";
import { Items } from "@/types";
import { compileMDX } from "next-mdx-remote/rsc";
import { yeongdeokSea } from "@/styles/font";
import DateFormat from "./DateFormat";
import { processedTagName } from "@/libs/constants";

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

const Post = async ({ slug, postData }: Props) => {
  const { title, tags, createdAt, content } = postData;

  return (
    <main className="flex flex-col items-center dark:text-white">
      <div className="max-w-screen-md flex flex-col gap-14 items-center">
        <div
          className={`${yeongdeokSea.className} flex flex-col gap-10 w-full`}
        >
          <div className="flex justify-center">
            <p className="text-5xl">{title}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {tags.map((tag: string, index: number) => (
              <div
                key={index}
                className="py-0.5 pr-2 pl-2 rounded-md shadow-inner shadow-gray-300 dark:shadow-gray-950"
              >
                <span className="underline underline-offset-4 decoration-wavy decoration-red-600 ">
                  {processedTagName[tag]}
                </span>
              </div>
            ))}
            <DateFormat createdAt={createdAt} />
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
        <article className="prose dark:prose-dark max-w-3xl">
          {await getCompiledContent(content)}
        </article>
      </div>
    </main>
  );
};

export default Post;

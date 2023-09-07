import Image from "next/image";

interface Props {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
}

export const PostCard = ({
  slug,
  title,
  description,
  tags,
  createdAt,
}: Props) => {
  return (
    <article className="pt-4 pb-4 rounded-md border border-solid shadow-lg">
      <div className="flex flex-col gap-6 m-6">
        <div className="absolute w-108 h-72 overflow-hidden bg-[hsl(0,0%,10%,0.4)] bg-fixed opacity-0 transition hover:opacity-100"></div>
        <Image
          className="rounded-md"
          src={`/contents/${tags[0]}/${slug}/cover.png`}
          width={432}
          height={288}
          alt={slug + " thumbnail"}
        />
        <div className="flex flex-col items-end">
          <p>{title}</p>
          <p>{createdAt}</p>
        </div>

        {/* <p>{description}</p> */}
      </div>
    </article>
  );
};
/*
"slug",
"title",
"description",
"thubnail",
"tags",
"createdAt",
*/

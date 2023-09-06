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
    <article className="rounded-md border border-solid shadow-lg">
      <div className="flex flex-col gap-2 m-6">
        <Image
          className="rounded-md"
          src={`/contents/${tags[0]}/${slug}/cover.png`}
          width={400}
          height={350}
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

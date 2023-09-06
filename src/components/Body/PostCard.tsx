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
    <article className="rounded-md border border-solid">
      <p>{createdAt}</p>
      <Image
        src={`/contents/${tags[0]}/${slug}/cover.png`}
        width={450}
        height={400}
        alt={slug + " thumbnail"}
      />
      <p>{title}</p>
      <p>{description}</p>
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

import Image from "next/image";
import React, { useState } from "react";

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
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <a
      href="/"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <article className="pt-4 pb-4 rounded-md border border-solid shadow-lg">
        <div className="flex flex-col gap-6 m-6">
          <div
            className="absolute w-108 h-72 rounded-md shadow overflow-hidden bg-[hsl(0,0%,10%,0.8)] bg-fixed transition
            opacity-0 hover:opacity-100
            "
            style={{ opacity: isHover ? 1 : 0 }}
          >
            <p className="text-white">{description}</p>
          </div>
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
        </div>
      </article>
    </a>
  );
};

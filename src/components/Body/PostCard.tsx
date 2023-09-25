"use client";

import { processedTagName } from "@/libs/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [cardCSS, setCardCSS] = useState<string>("");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setCardCSS(`
    .card-${slug} {
      display: inline-grid;
      transition: transform 0.3s;
      transform: perspective(2000px) rotateY(${isHover ? 180 : 0}deg);
      transform-style: preserve-3d;
    }

    .card-${slug} > * {
      grid-area: 1 / 1 / 1 / 1;
      backface-visibility: hidden;
    }

    .card-back-${slug} {
      transform: rotateY(180deg);
    }
  `);
  }, [isHover, slug]);

  if (isLoading === true) {
    // skeleton
    return (
      <article className="pt-4 pb-4 rounded-md border border-solid shadow-lg">
        <div className="flex flex-col gap-6 m-6 animate-pulse">
          <div className="w-108 h-72 rounded-md shadow overflow-hidden bg-slate-600 bg-fixed transition"></div>
          <div className="flex flex-col gap-2 items-end">
            <div className="w-52 h-6 rounded-md bg-slate-600" />
            <div className="w-28 h-6 rounded-md bg-slate-600" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <a
      href={`/posts/${tags[0]}/${slug}`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`card-${slug}`}>
        <style>{cardCSS}</style>
        {/* 앞면 */}
        <article
          className={`card-front-${slug} pt-4 pb-4 rounded-md border border-solid shadow-lg`}
        >
          <div className="flex flex-col gap-6 m-6">
            <Image
              className="rounded-md"
              src={`/contents/${tags[0]}/${slug}/cover.png`}
              width={432}
              height={288}
              alt={slug + " thumbnail"}
              priority
            />
            <div className="flex flex-col gap-2 items-end">
              <p>{title}</p>
              <p>{createdAt}</p>
            </div>
          </div>
        </article>
        {/* 뒷면 */}
        <article
          className={`card-back-${slug} pt-4 pb-4 rounded-md border border-solid shadow-lg`}
        >
          <div className="flex flex-col gap-6 m-6">
            <div className="w-108 h-72 rounded-md shadow overflow-hidden bg-[hsl(0,0%,10%,0.8)] bg-fixed transition"></div>
            <div className="flex flex-col gap-2 items-start">
              <div className="flex gap-2">
                {tags.map((tag, idx) => {
                  return (
                    <p
                      key={idx}
                      className="underline underline-offset-4 decoration-wavy decoration-red-600"
                    >
                      {processedTagName[tag]}
                      {/* {tags.map((tag) => processedTagName[tag])} */}
                    </p>
                  );
                })}
                {/* <p className="underline underline-offset-4 decoration-wavy decoration-red-600">
                  {tags.map((tag) => processedTagName[tag])}
                </p> */}
              </div>
              <p>{description}</p>
            </div>
          </div>
        </article>
      </div>
    </a>
  );
};

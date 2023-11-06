"use client";

import React, { useState } from "react";
import Image from "next/image";
import { processedTagName } from "@/libs/constants";

interface Props {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
}

const PostCard = ({ slug, title, description, tags, createdAt }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <a
      href={`/posts/${tags[0]}/${slug}`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`p-6 w-80 flex flex-col rounded-md transition-transform transform-gpu dark:text-white hover:translate-y-[-15px] ${
          isHover ? "shadow-lg shadow-slate-500" : ""
        }`}
      >
        <div className="w-full relative">
          <Image
            className={`rounded-md transition-transform filter ${
              isHover ? " brightness-50" : ""
            }`}
            draggable={false}
            src={`/contents/${tags[0]}/${slug}/cover.png`}
            width={300}
            height={300}
            alt={slug + " thumbnail"}
            priority
          />
          {isHover && (
            <div className="absolute top-3 left-4 text-slate-50">
              {tags.map((tag) => (
                <p key={`tag-name-${tag}`}>{processedTagName[tag]}</p>
              ))}
            </div>
          )}
        </div>
        <div className={`pt-4 w-full ${isHover ? "underline" : ""}`}>
          <p className="whitespace-normal text-base ">{title}</p>
        </div>
        <div className="pt-3 w-full">
          <p className="whitespace-normal text-xs text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
        <div className="pt-3 flex justify-end font-xs">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {createdAt}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PostCard;

// 공식문서 예제의 "blog-start" code 참고
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Items } from "@/types";

const postsDirectory = join(process.cwd(), "/posts");

export function getPostTags() {
  let ret = fs.readdirSync(postsDirectory);
  return ret.filter((tag) => tag !== ".DS_Store");
}

export function getPostTagsAndEachCount() {
  const ret: [string, number][] = [];
  const tags = getPostTags();
  tags.forEach((tag) => {
    const count = fs
      .readdirSync(join(postsDirectory, `/${tag}`))
      .filter((tag) => tag !== ".DS_Store").length;
    ret.push([tag, count]);
  });
  return ret;
}

export function getPostSlugs(tags: string[]) {
  let totalSlugs: string[] = [];
  tags.forEach((tag) => {
    const dirPath = join(postsDirectory, tag);
    const slugs = fs
      .readdirSync(dirPath)
      .filter((slug) => slug !== ".DS_Store")
      .map((slug) => `${tag}/${slug}`);
    totalSlugs = [...totalSlugs, ...slugs];
  });
  return totalSlugs;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}/content.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const tags = getPostTags();
  const slugs = getPostSlugs(tags);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));
  return posts;
}

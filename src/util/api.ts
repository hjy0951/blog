// 공식문서 예제의 "blog-start" code 참고
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "/contents");

export function getPostTags() {
  const ret = fs.readdirSync(postsDirectory);
  return ret;
}

export function getPostSlugs(tags: string[]) {
  let totalSlugs: string[] = [];
  tags.forEach((tag) => {
    const dirPath = join(postsDirectory, tag);
    const slugs = fs.readdirSync(dirPath).map((el) => `${tag}/${el}`);
    totalSlugs = [...slugs];
  });
  // return fs.readdirSync(postsDirectory);
  return totalSlugs;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}/content.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

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
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

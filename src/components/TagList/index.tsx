import Link from "next/link";
import { processedTagName } from "@/libs/constants";

interface Props {
  tagData: [string, number][];
}

const Tags = ({ tagData }: Props) => {
  const totalPostCount = tagData.reduce((acc, el) => {
    return acc + el[1];
  }, 0);
  const tagList = [["all", totalPostCount]].concat(tagData);
  const createTag = (data: (string | number)[], idx: number) => {
    const tagName = data[0];
    return (
      <Link
        href={`/${tagName === "all" ? "" : "tags/" + tagName}`}
        key={idx}
        className="flex underline-offset-4 hover:underline"
      >
        <h3>{processedTagName[tagName]}</h3>
        <p>{"(" + data[1] + ")"}</p>
      </Link>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        {tagList.map((tag, idx) => createTag(tag, idx))}
      </div>
    </div>
  );
};

export default Tags;

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
        className="flex gap-1"
      >
        <p className="underline-offset-4 hover:underline">
          {processedTagName[tagName]}
        </p>
        <p className="text-end text-xs">{"(" + data[1] + ")"}</p>
      </Link>
    );
  };

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex gap-1 items-center justify-start text-2xl font-bold leading-loose">
        <p>Tags</p>
      </div>
      <div className="pl-6 p-3 flex gap-5">
        {tagList.map((tag, idx) => createTag(tag, idx))}
      </div>
    </div>
  );
};

export default Tags;

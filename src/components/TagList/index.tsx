import Link from "next/link";
import { processedTagName } from "@/libs/constants";

interface Props {
  tagData: [string, number][];
  selected?: string;
}

const Tags = ({ tagData, selected }: Props) => {
  const totalPostCount = tagData.reduce((acc, el) => {
    return acc + el[1];
  }, 0);
  const tagList = [["all", totalPostCount]].concat(tagData);
  const createTag = (data: (string | number)[], idx: number) => {
    const tagName = data[0];
    selected = selected || "all";
    return (
      <Link
        href={`/${tagName === "all" ? "" : "tags/" + tagName}`}
        key={idx}
        className={`flex pl-3 pr-3 p-1.5 ${
          selected === tagName
            ? "rounded-lg shadow-md dark:shadow-gray-600 bg-slate-200 dark:bg-indigo-900"
            : ""
        } dark:text-white`}
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
        <p className="dark:text-white">Tags</p>
      </div>
      <div className="pl-6 p-3 flex gap-0.5">
        {tagList.map((tag, idx) => createTag(tag, idx))}
      </div>
    </div>
  );
};

export default Tags;

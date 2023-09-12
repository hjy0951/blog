import { processedTagName } from "@/utils/constants";

interface Props {
  tagData: [string, number][];
}

export const Tags = ({ tagData }: Props) => {
  const totalPostCount = tagData.reduce((acc, el) => {
    return acc + el[1];
  }, 0);
  const tagList = [["all", totalPostCount]].concat(tagData);
  const createTag = (data: (string | number)[], idx: number) => {
    const name = processedTagName[data[0]];
    return (
      <div key={idx} className="flex underline-offset-4 hover:underline">
        <h3>{name}</h3>
        <p>{"(" + data[1] + ")"}</p>
      </div>
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

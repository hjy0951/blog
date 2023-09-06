interface Props {
  tagData: [string, number][];
}

export const Tags = ({ tagData }: Props) => {
  const totalPostCount = tagData.reduce((acc, el) => {
    return acc + el[1];
  }, 0);
  const tagList = [["All", totalPostCount]].concat(tagData);
  const createTag = (data: (string | number)[], idx: number) => {
    return (
      <div key={idx} className="flex hover:font-bold">
        <h3>{data[0]}</h3>
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

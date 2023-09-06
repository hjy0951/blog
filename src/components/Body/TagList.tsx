interface Props {
  tagData: [string, number][];
}

export const Tags = ({ tagData }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 justify-center">
        <h2>currentTags</h2>
        <p>{"(" + ")"}</p>
      </div>
      {/* <div>{tags}</div> */}
    </div>
  );
};

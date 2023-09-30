interface Props {
  createdAt: string;
}
export const DateFormat = ({ createdAt }: Props) => {
  const splitDate = createdAt.split(".").map((el) => el.split(""));
  console.log(splitDate);
  return (
    <div className="flex gap-1">
      {splitDate.map((date, idx1) => (
        <div
          key={idx1}
          className="flex rounded-md border border-solid shadow-inner"
        >
          {date.map((num, idx2) => {
            if (idx2 === 0)
              return (
                <div
                  key={idx2}
                  className="p-1 pl-2 rounded-l-md border-r border-solid"
                >
                  {num}
                </div>
              );
            else if (idx2 === date.length - 1)
              return (
                <div key={idx2} className="p-1 pr-2 rounded-r-md">
                  {num}
                </div>
              );
            else
              return (
                <div key={idx2} className="p-1 border-r border-solid">
                  {num}
                </div>
              );
          })}
        </div>
      ))}
    </div>
  );
};

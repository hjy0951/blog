interface Props {
  createdAt: string;
}

const DateFormat = ({ createdAt }: Props) => {
  const splitDate = createdAt.split(".").map((el) => el.split(""));

  return (
    <div className="flex gap-1">
      {splitDate.map((date, idx1) => (
        <div
          key={idx1}
          className="flex rounded-md shadow-inner shadow-gray-300 dark:shadow-gray-950"
        >
          {date.map((num, idx2) => {
            if (idx2 === 0)
              return (
                <div key={idx2} className="p-1 pl-2 rounded-l-md">
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
                <div key={idx2} className="p-1 ">
                  {num}
                </div>
              );
          })}
        </div>
      ))}
    </div>
  );
};

export default DateFormat;

import { yeongdeokSea } from "@/styles/font";
import ModeButton from "./ModeButton";
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const SNSs = [
  {
    icon: (
      <RiGithubFill
        size={35}
        className="fill-gray-800 dark:fill-white hover:fill-violet-950 dark:hover:fill-violet-300 hover:animate-bounce"
      />
    ),
    url: "https://github.com/hjy0951",
  },
  {
    icon: (
      <RiLinkedinBoxFill
        size={35}
        className="fill-gray-800 dark:fill-white hover:fill-blue-800 dark:hover:fill-blue-300 hover:animate-bounce"
      />
    ),
    url: "https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%ED%97%88-159288250/",
  },
  {
    icon: (
      <RiInstagramLine
        size={35}
        className="fill-gray-800 dark:fill-white hover:fill-pink-600 dark:hover:fill-pink-300 hover:animate-bounce"
      />
    ),
    url: "https://www.instagram.com/heojoooon/",
  },
];

const Header = () => {
  const createSNSButton = ({
    icon,
    url,
  }: {
    icon: React.ReactNode;
    url: string;
  }) => (
    <a
      href={url}
      className="flex justify-center items-center"
      style={{ width: "35px", height: "35px" }}
    >
      {icon}
    </a>
  );

  return (
    <header
      className="sticky top-0 w-full h-20 border-b flex justify-evenly items-center shadow z-10 bg-white
    dark:bg-slate-800 dark:text-white"
    >
      <div className={`${yeongdeokSea.className} w-32`}>
        <a href="/" className="text-lg hover:underline">
          <p>Heojoooon.</p>
        </a>
        {/* <div className="flex justify-end">
          <p>별 3개짜리 개발자</p>
        </div> */}
      </div>
      <div className="w-1/3 h-full" />
      <div className="flex w-52 justify-between" style={{ minWidth: "200px" }}>
        <ModeButton />
        <div className="flex gap-2 justify-between">
          {SNSs.map((sns) => createSNSButton(sns))}
        </div>
      </div>
    </header>
  );
};

export default Header;

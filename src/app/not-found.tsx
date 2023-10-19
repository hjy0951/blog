import Image from "next/image";
import Link from "next/link";
import NotFoundSvg from "@assets/404.svg";

export default function NotFound() {
  return (
    <div className="pt-12 flex flex-col items-center">
      <div className="flex flex-col gap-10 items-center">
        <Image
          src={NotFoundSvg}
          width={432}
          height={288}
          alt="Page is not found!"
          priority
        />
        <div className="flex flex-col items-end">
          <p>페이지를 찾을 수 없습니다.</p>
          <p className="text-xs">{'"Page is not found."'}</p>
        </div>
        <Link className="flex flex-col items-end hover:animate-bounce" href="/">
          <p>홈으로 이동</p>
          <p className="text-xs">{'"Go home"'}</p>
        </Link>
      </div>
    </div>
  );
}

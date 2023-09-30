import localFont from "next/font/local";

export const suite = localFont({
  src: [
    {
      path: "./fonts/Suite/SUITE-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Suite/SUITE-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-suite",
  display: "swap",
});

export const yeongdeokSea = localFont({
  src: [
    {
      path: "./fonts/YeongdeokSea/YeongdeokSea.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yeongdeokSea",
  display: "swap",
});

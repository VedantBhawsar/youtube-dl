import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black text-white px-48 py-10  h-80  items-center flex flex-col gap-10 w-full">
      <span className="select-none text-lg text-gray-400">
        @ 2023 Youtube Downloader, made with 🫶 by vedant.
      </span>
      <div className="flex w-full justify-between">
        <div className="select-none">
          <Link
            href={"/"}
            className="font-[--font-family-sans-serif]  text-2xl text-white flex items-center gap-2 hover:underline underline-offset-3"
            style={{ fontWeight: 500 }}
          >
            <div className="w-6 h-6 relative flex">
              <Image src={"/logo.png"} fill alt="logo" />
            </div>
            ssyoutube
          </Link>
        </div>
        <div className="flex  flex-col gap-[10px] text-gray-200">
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Youtube Downloader
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Download Youtube to mp4
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Youtube Shorts
          </Link>{" "}
        </div>{" "}
        <div className="flex  flex-col gap-[10px] text-gray-200">
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Tiktok Video Downloader
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Instagram Video Downloader
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Facebook Video Downloader
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Twitter Video Downloader
          </Link>
        </div>
        <div className="flex  flex-col gap-[10px] text-gray-200">
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            About us
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Privacy Policy
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Terms of Service
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            Contact
          </Link>{" "}
          <Link
            href={"/"}
            className="text-lg text-gray-300 text-inherit    hover:translate-x-2 duration-200 transition-all delay-75"
          >
            API
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

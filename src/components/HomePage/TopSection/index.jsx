"use client";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export const TopSection = ({ playlist }) => {
  const [arrow, setArrow] = useState(false);
  return (
    <div className="bg-[--primary] h-64 items-center justify-center flex flex-col w-full px-48 gap-3">
      <h1 className="text-3xl font-[--font-family-sans-sarif] text-white">
        {playlist ? "Youtube Playlist Downloader" : "Youtube Video Downloader"}
      </h1>
      <div className="w-4/6   rounded-md bg-white flex">
        <input
          placeholder={`Paste your ${
            playlist ? "playlist" : "video"
          } link here`}
          className="w-full h-full outline-none pl-5 rounded-md"
        />
        <button
          className="flex gap-1 items-center bg-red-500 m-1 p-3 rounded-md px-5 text-white "
          onMouseEnter={() => setArrow(true)}
          onMouseLeave={() => setArrow(false)}
        >
          Download
          <div className={`${!arrow && "hidden"}`}>
            <BiRightArrowAlt size={"1.2em"} />
          </div>
        </button>
      </div>
    </div>
  );
};

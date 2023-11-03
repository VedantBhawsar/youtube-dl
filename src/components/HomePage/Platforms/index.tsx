"use client";
import Image from "next/image";

export const Platforms = () => {
  return (
    <div className="flex flex-col w-full px-48 py-10  gap-10">
      <p className="text-sm text-[--softTextColor] ">
        Looking for the ideal software to effortlessly download online videos or
        music? Discover our Ssyoutube video downloader – a free tool that lets
        you grab videos or tunes in just a single click!
      </p>
      <h2>Supported Platforms:</h2>
      <div className="flex justify-around">
        <div className="w-36 h-36 flex relative">
          <Image src={"/android.svg"} fill={true} alt={""} draggable={false} />
        </div>
        <div className="w-36 h-36 flex relative">
          <Image src={"/linux.svg"} fill={true} alt={""} draggable={false} />
        </div>
        <div className="w-36 h-36 flex relative">
          <Image src={"/apple.svg"} fill={true} alt={""} draggable={false} />
        </div>
        <div className="w-36 h-36 flex relative">
          <Image src={"/windows.svg"} fill={true} alt={""} draggable={false} />
        </div>
      </div>
    </div>
  );
};

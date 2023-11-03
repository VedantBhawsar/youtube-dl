"use client";
import { ThemeContext, ThemeContextType } from "@/contexts/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggleTheme, theme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  console.log(theme);

  return (
    <>
      <div
        className={
          "flex w-10  h-4 p-[5px] rounded-full cursor-pointer relative justify-between items-center "
        }
        onClick={toggleTheme}
        style={
          theme === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0f172a" }
        }
      >
        <Image src="/moon.png" alt="" width={14} height={14} />
        <div
          className={"w-[12px] h-[12px] rounded-full absolute"}
          style={
            theme === "dark"
              ? { left: 7, background: "#0f172a" }
              : { right: 6, background: "white" }
          }
        ></div>
        <Image src="/sun.png" alt="" width={14} height={14} />
      </div>
    </>
  );
};

export default ThemeToggle;

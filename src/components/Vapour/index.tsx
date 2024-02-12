"use client";
import { useScreen } from "@/hook";
import "./index.css";

const path = [
  1, 13, 4, 5, 6, 14, 7, 12, 9, 18, 10, 11, 2, 16, 8, 15, 17, 20, 19, 3,
];
const Vapour = () => {
  const { isMobile } = useScreen();

  const spanStyles = {
    "--i": path.slice(0, isMobile ? 3 : 8),
  };

  return (
    <div className="h-0 relative flex z-[1] px-5">
      {spanStyles["--i"].map((index) => (
        <span
          key={index}
          className="vapour-span relative min-h-2 mx-[2px] mb-[50px] block h-[120px] min-w-[6px] bg-[#aaa] rounded-full filter blur-[10px]"
          style={{ "--i": index } as React.CSSProperties}
        ></span>
      ))}
    </div>
  );
};

export default Vapour;

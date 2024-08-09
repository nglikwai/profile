import { FC } from "react";

type props = {
  callback: any;
  title: string;
};

const UnderlineButton: FC<props> = ({ callback, title }) => {
  return (
    <button
      className="group hover:text-[var(--primary-color)] flex flex-col items-center tracking-wide sm:text-sm"
      onClick={callback}
    >
      {title}
      <div className="group-hover:w-full origin-center w-0 border-b-2 transition-all duration-300 border-[var(--primary-color)] mt-1"></div>
    </button>
  );
};

export default UnderlineButton;

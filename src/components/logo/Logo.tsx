import { ArrowsExpandIcon } from "@heroicons/react/solid";
import { forwardRef } from "react";

type Props = {
  invert?: boolean;
  href?: string;
};

export const Logo = forwardRef<HTMLAnchorElement, Props>(
  ({ invert, href }, ref) => {
    return (
      <a ref={ref} href={href} className="flex items-center group">
        <span
          className={`
          flex items-center justify-center h-8 w-8 rounded-full text-lg font-bold
          ${invert ? "bg-white text-zinc-800" : "bg-zinc-800 text-white"}
          transition-transform group-hover:scale-110 group-hover:rotate-[135deg] duration-1000
      `}
        >
          <ArrowsExpandIcon className="w-6 h-6" />
        </span>
        <span className="text-xl font-medium ml-2">InCrypto</span>
        <span
          className={`
          text-xl font-light ml-0.5 underline underline-offset-2
          ${invert ? "decoration-white" : "decoration-zinc-800"}
      `}
        >
          Encrypted
        </span>
      </a>
    );
  }
);

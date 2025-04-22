
import React from "react";
import { cn } from "@/lib/utils";

interface NavOutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "a" | "button";
  href?: string;
  children: React.ReactNode;
  className?: string;
  disableHover?: boolean;
}

export function NavOutlineButton({
  as = "button",
  href,
  children,
  className,
  disableHover = false,
  ...rest
}: NavOutlineButtonProps) {
  const style =
    "px-2.5 py-1.5 rounded-lg border border-white/20 bg-transparent text-white font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2";
  const hover =
    disableHover
      ? ""
      : "hover:bg-white/5";

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(style, hover, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={cn(style, hover, className)}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

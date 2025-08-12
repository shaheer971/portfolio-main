
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonOrAnchorProps = {
  as?: "a" | "button";
  href?: string;
  children: React.ReactNode;
  className?: string;
  disableHover?: boolean;
}

type NavOutlineButtonProps = ButtonOrAnchorProps & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export const NavOutlineButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, NavOutlineButtonProps>(
  ({ as = "button", href, children, className, disableHover = false, ...rest }, ref) => {
    const style =
      "px-2 py-1 border border-white/20 bg-transparent text-white font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2";
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
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        className={cn(style, hover, className)}
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

NavOutlineButton.displayName = "NavOutlineButton";

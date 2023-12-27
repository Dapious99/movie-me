import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  size = "sm || md",
  variant = "primary || secondary || blackish",
  ...props
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center w-auto font-medium rounded-md shadow focus:outline-none disabled:opacity-50",
      {
        "py-2 px-10 text-sm font-normal": size === "sm",
        "py-3 px-32 md:px-24 sm:px-20 text-sm font-normal": size === "md",
        "bg-[#3B82F6] text-white hover:bg-[#3B82F6]": variant === "primary",
        "bg-transparent text-[#0F172A] border border-[#0F172A]":
          variant === "secondary",
      }
    )}
    {...props}
  >
    {title}
  </button>
);

export default Button;

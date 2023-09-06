import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:bg-gray-500"
    >
      {children}
    </button>
  );
};

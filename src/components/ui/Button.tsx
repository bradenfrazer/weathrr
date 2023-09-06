import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded bg-white px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-100 hover:text-blue-800 disabled:text-gray-700 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

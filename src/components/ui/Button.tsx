import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

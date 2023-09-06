import { InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      {...props}
      className="rounded border-b-2 border-emerald-600 bg-slate-950/25 p-4 focus:border-blue-700"
    />
  );
};

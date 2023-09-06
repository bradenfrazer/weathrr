import { capitalize } from "../helpers";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

interface FormInputProps {
  field: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
}

export const FormInput = ({
  field,
  value,
  onChange,
  className,
}: FormInputProps) => {
  return (
    <div className={`flex w-full flex-col gap-2 ${className ?? ""}`}>
      <Label htmlFor={field}>{capitalize(field)}</Label>
      <Input name={field} value={value} onChange={onChange} />
    </div>
  );
};

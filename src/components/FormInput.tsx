import { capitalize } from "../helpers";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

interface FormInputProps {
  field: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const FormInput = ({ field, value, onChange }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={field}>{capitalize(field)}</Label>
      <Input name={field} value={value} onChange={onChange} />
    </div>
  );
};

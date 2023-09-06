import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

interface FormInputProps {
  field: string;
}

export const FormInput = ({ field }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={field}>{capitalize(field)}</Label>
      <Input name={field} />
    </div>
  );
};

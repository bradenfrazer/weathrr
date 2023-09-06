import { FormInput } from "./FormInput";
import { Button } from "./ui/Button";

export const Form = () => {
  return (
    <form className="flex flex-1 flex-col items-center justify-center gap-8 xl:flex-row xl:items-end">
      <div className="flex w-full flex-col gap-8 sm:flex-row">
        <FormInput field="city" />
        <FormInput field="country" />
      </div>
      <div>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

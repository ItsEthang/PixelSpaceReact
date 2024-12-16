import { Callout } from "@radix-ui/themes";
import { BsInfoCircle } from "react-icons/bs";

const ErrorCallout = ({ error }: { error: string }) => {
  return (
    <Callout.Root color="red" className="mb-5">
      <Callout.Icon>
        <BsInfoCircle />
      </Callout.Icon>
      <Callout.Text>{error}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorCallout;

import { TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchField = () => {
  return (
    <TextField.Root placeholder="Search by title…">
      <TextField.Slot>
        <FaMagnifyingGlass height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default SearchField;

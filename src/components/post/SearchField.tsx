import { TextField } from "@radix-ui/themes";
import { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import usePostQueryStore from "./store";

const SearchField = () => {
  const { setTitle } = usePostQueryStore();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setTitle(ref.current.value);
        }
      }}
    >
      <TextField.Root placeholder="Search by title…" ref={ref}>
        <TextField.Slot>
          <FaMagnifyingGlass height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </form>
  );
};

export default SearchField;

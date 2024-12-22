import { TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import usePostQueryStore from "./store";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const { setTitle } = usePostQueryStore();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setTitle(ref.current.value);
          navigate("/");
        }
      }}
    >
      <TextField.Root placeholder="Search by title…">
        <TextField.Slot ref={ref}>
          <FaMagnifyingGlass height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </form>
  );
};

export default SearchField;

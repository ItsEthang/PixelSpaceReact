import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const LikeBtn = () => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <Button onClick={handleClick} variant="ghost" size="4">
      {liked ? <BiSolidLike /> : <BiLike />}
    </Button>
  );
};

export default LikeBtn;

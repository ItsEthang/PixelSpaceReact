import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

interface Props {
  giveLike: () => void;
  giveUnlike: () => void;
}

const LikeBtn = ({ giveLike, giveUnlike }: Props) => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    if (!liked) {
      giveLike();
      setLiked(!liked);
    } else {
      giveUnlike();
      setLiked(!liked);
    }
  };
  return (
    <Button onClick={handleClick} variant="ghost" size="4">
      {liked ? <BiSolidLike /> : <BiLike />}
    </Button>
  );
};

export default LikeBtn;

import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import useGetLikeByUserAndPost from "../../hooks/useGetLikeByUserAndPost";

interface Props {
  giveLike: () => void;
  giveUnlike: () => void;
  postId: string;
  userId: string;
}

const LikeBtn = ({ giveLike, giveUnlike, postId, userId }: Props) => {
  const { data: isLikedByLogIn, error: likeError } = useGetLikeByUserAndPost(
    postId,
    userId
  );
  if (likeError || isLikedByLogIn === undefined) {
    return null;
  }
  const [liked, setLiked] = useState(isLikedByLogIn);

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

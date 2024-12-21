import { Button, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import useGetLikeByUserAndPost from "../../hooks/useGetLikeByUserAndPost";
import useGetPostLikeCount from "../../hooks/useGetPostLikeCount";

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
  const { data: likeCtn } = useGetPostLikeCount(postId);

  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  useEffect(() => {
    if (isLikedByLogIn !== undefined && !likeError) {
      setLiked(isLikedByLogIn);
    }
    if (likeCtn !== undefined) {
      setLikeCount(likeCtn);
    }
  }, [isLikedByLogIn, likeCtn, likeError]);

  const handleClick = () => {
    if (!liked) {
      giveLike();
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      giveUnlike();
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  if (likeError || isLikedByLogIn === undefined) {
    return null;
  }
  return (
    <Button onClick={handleClick} variant="ghost" size="4">
      {liked ? <BiSolidLike /> : <BiLike />} <Text>{likeCount}</Text>
    </Button>
  );
};

export default LikeBtn;

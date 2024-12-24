import { Button, Text } from "@radix-ui/themes";
import { useQueryClient } from "@tanstack/react-query";
import { BiLike, BiSolidLike } from "react-icons/bi";
import useGiveLike from "../../hooks/useGiveLike";
import useGiveUnlike from "../../hooks/useGiveUnlike";
import { useState } from "react";

interface Props {
  isLikedByAuthUser: boolean;
  likeCtn: number;
  postId: string;
  userId: string;
}

const LikeBtn = ({ isLikedByAuthUser, likeCtn, postId, userId }: Props) => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries([userId, "like", postId]);
  queryClient.invalidateQueries(["post", postId, "like"]);

  const [isLiked, setIsLiked] = useState(isLikedByAuthUser);
  const [likeCount, setLikeCtn] = useState(likeCtn);

  const handleClick = () => {
    if (!isLiked) {
      useGiveLike(+postId, userId);
      setIsLiked(true);
      setLikeCtn(likeCount + 1);
    } else {
      useGiveUnlike(+postId, userId);
      setIsLiked(false);
      setLikeCtn(likeCount - 1);
    }
  };

  return (
    <Button onClick={handleClick} variant="ghost" size="4">
      {isLiked ? <BiSolidLike /> : <BiLike />} <Text>{likeCount}</Text>
    </Button>
  );
};

export default LikeBtn;

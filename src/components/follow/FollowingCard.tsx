import { Avatar, Card, Flex, Text } from "@radix-ui/themes";
import { UserInfo } from "../../interfaces/Entity";
import { useState } from "react";

interface Props {
  following: UserInfo;
  handleClick: (userId: string | undefined) => void;
}
const FollowingCard = ({ following, handleClick }: Props) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const onClick = () => {
    if (isFiltered) {
      handleClick(undefined);
    } else {
      handleClick(following.userId + "");
    }
    setIsFiltered(!isFiltered);
  };
  return (
    <Card
      className="hover:bg-slate-800 transition-all w-40 xl:w-52 my-3"
      onClick={onClick}
    >
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src={following.profileImg}
          radius="full"
          fallback="T"
        />
        <Text
          as="div"
          align="center"
          size="3"
          weight="bold"
          color="gray"
          className="line-clamp-1"
        >
          {following.name}
        </Text>
      </Flex>
    </Card>
  );
};

export default FollowingCard;

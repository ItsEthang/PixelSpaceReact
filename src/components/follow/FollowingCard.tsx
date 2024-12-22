import { Avatar, Card, Flex, Text } from "@radix-ui/themes";
import { UserInfo } from "../../interfaces/Entity";

interface Props {
  following: UserInfo;
  handleClick: (userId: string | undefined) => void;
}
const FollowingCard = ({ following, handleClick }: Props) => {
  return (
    <Card
      className="hover:bg-slate-800 transition-all w-40 xl:w-52 my-3"
      onClick={() => handleClick(following.userId + "")}
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

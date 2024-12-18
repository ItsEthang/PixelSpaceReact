import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const EditProfileBtn = ({ userId }: { userId: string }) => {
  return (
    <Link to={`/profile/${userId}/edit`}>
      <Button variant="ghost" color="yellow">
        Edit Profile
      </Button>
    </Link>
  );
};

export default EditProfileBtn;

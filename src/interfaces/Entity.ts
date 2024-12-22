export interface Post {
  postId: number;
  title: string;
  content: string;
  timeCreated: number;
}

export interface Comment {
  commentId: number;
  content: string;
  timeCreated: number;
  likes: {
    likeId: number;
  }[];
}

export interface UserInfo {
  userId: number;
  username: string;
  name: string;
  profileImg: string;
}

export interface UserProfile {
  username: string;
  name: string;
  profileImg: string;
  bio: string;
}

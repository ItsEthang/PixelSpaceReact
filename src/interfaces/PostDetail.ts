export interface PostDetail {
  postId: number;
  title: string;
  content: string;
  timeCreated: number;
  comments: Comment[];
  likes: Like[];
}

interface Comment {
  commentId: number;
  content: string;
  timeCreated: number;
  likes: Like[];
}

interface Like {
  likeId: number;
}

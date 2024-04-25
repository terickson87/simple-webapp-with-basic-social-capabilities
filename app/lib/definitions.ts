
export type UserId = {
  userId: number;
}

export type PostId = {
  postId: number;
}

export type User = {
  id: UserId;
  name: string;
  email: string;
  password: string;
  friendIds: Set<UserId>;
  postIds: Set<PostId>;
};

export type Post = {
  id: PostId;
  postedBy: UserId;
  postedWhen: Date;
  body: String;
}


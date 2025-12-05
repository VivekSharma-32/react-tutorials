import React from "react";
import WithData from "./hoc/WithData";
import PostList from "./PostList";

const PostListWithData = WithData(
  PostList,
  "https://jsonplaceholder.typicode.com/posts"
);

export default PostListWithData;

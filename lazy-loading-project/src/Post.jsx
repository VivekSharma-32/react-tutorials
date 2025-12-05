import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await postsData.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <>
            <li key={post.id}>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Post;

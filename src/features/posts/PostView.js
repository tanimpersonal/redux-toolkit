import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {error && <p>{error}</p>}
      {posts &&
        posts.map((post) => {
          return (
            <article key={post.id}>
              <h1>{post.title}</h1>
              <p> {post.body} </p>
            </article>
          );
        })}
    </div>
  );
};

export default PostView;

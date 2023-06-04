//import axios from "axios";
//import { useEffect, useState } from "react";
import usePosts from "../routing/hooks/usePosts";
import { useState } from "react";
const PostList = () => {
  const [userId, setUser] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);
  /* const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {s
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((error) => setError(error));
  }, []);*/

  if (isLoading) return <p>{"Loading ..."}</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        value={userId}
        onChange={(event) => {
          setUser(parseInt(event.target.value));
          console.log("venet", event.target.value);
        }}
      >
        <option value="">All</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;

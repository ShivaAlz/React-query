//import axios from "axios";
//import { useEffect, useState } from "react";
import usePosts from "../routing/hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();
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
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;

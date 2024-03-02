import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
          <NavLink style={{ display: "block" }} to={`/post/${post.id}`}>
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;

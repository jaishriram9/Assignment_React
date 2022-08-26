import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => console.log(error));
  }, [setPosts]);

  const submitHandler = (event) => {
    event.preventDefault();
    const key = inputValue;

    const newPosts = posts.filter((post) => {
      return post.title.includes(key) || post.body.includes(key);
    });
    
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <div className="App__input">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></input>
        <button type="submit" onClick={submitHandler}>
          Confirm
        </button>
      </div>
      <div className="App__posts">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} posts={post} />;
          })}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="List">
      <h2>List</h2>

      {PostList.map((post, idx) => (
        <div key={idx}>
          <p> 제목 : {post.title}</p>
          내용 : {post.content}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default List;

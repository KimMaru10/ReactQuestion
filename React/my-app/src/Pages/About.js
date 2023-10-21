
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function About() {
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
    axios({
      method : "Get",
      url : "https://jsonplaceholder.typicode.com/posts",

    }).then(response => setPosts(response.data));
  })

  return (
    <div>
        <h2>about페이지 입니다.</h2>
        <div>
          <h2>불러온 데이터</h2>
          <p>{posts.length}</p>
          {posts.map(post=>(
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
    </div>
  );
}

export default About;

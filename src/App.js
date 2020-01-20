import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
      axios.get(`https://www.reddit.com/r/WebdevTutorials.json`)
        .then(res => {
          const newPosts = res.data.data.children
            .map(obj => obj.data);
    
          setPosts(newPosts);
        });
    }, []);

    return (
      <div className="app">
        <h1>/r/WebdevTutorials</h1>
       
          {posts.map(post => (
            <div key={post.id}>
              <h4>Post Name: {post.title}</h4>
               <br/> 
              <img src={post.thumbnail} alt="thumbnail" /> <br/>
              <a href={post.url} >Watch on YouTube</a>
            <hr />
            </div>
            
          ))}
        
      </div>
    );
  }


  


export default App;

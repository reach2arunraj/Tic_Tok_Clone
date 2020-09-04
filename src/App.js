import React, { useEffect, useState } from 'react';
import './App.css';
import Video from "./Video" 
import instance from "./axios"


function App() {
  const [Videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts(){
      const response = await instance.get("/v2/posts")
      setVideos(response.data)

      return response;
    }
    fetchPosts();

  }, []);

  console.log(Videos)

  return (
    <div className="app">
      <div className="app_videos">
      {Videos.map(({url, channel, description, song, likes, messages,shares}) => (
        <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

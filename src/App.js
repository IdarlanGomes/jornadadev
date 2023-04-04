import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
    if(window.innerHeight <= 800){
      maxHeight = window.innerHeight;
  }  

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
          likes = {357}
          messages = {74}
          shares = {255}     
          name = "raiana"
          description = "Gatinho fofinho"
          music = "miau miau"   
          url = "https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"       
        /> */}
      </div>
    </div>
  );
}

export default App;

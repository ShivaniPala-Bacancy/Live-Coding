import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App= props => {
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(25);
  let likeClasses = ["like-button"]
  let dislikeClasses = ["dislike-button"]

  const likeHandler = () => {
    likeClasses.push("liked")
    console.log(likeClasses)
    setLike(prev => prev + 1)
  }
  
  const dislikeHandler = () => {
    dislikeClasses.push("disliked")
    setDislike(prev => prev + 1)
  }

  return (
    <div>
      <button className={likeClasses.join(' ')} onClick={() => likeHandler()}>Like &nbsp; | <span>{like}</span> </button> 
      <button className={dislikeClasses.join(' ')} onClick={() => dislikeHandler()}>Dislike &nbsp; | <span>{dislike}</span></button>
    </div>
  );
}

export default App;

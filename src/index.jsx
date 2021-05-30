import React, {useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Joke from './Joke';
import {jokes} from './jokes';



  const JokerUser = () => {
  return (
  
    // <div className="joke__users">
      <div className="user-avatar" >
     <img src="/img/user01.png" /> 
      
      <p className="user-name">Neroxx</p>

     
    </div> 
    // </div>
  );
};


 const JokeText = () => {

  return (
    // <div className="joke__text">
    <p>
    The secret service isn't allowed to yell "Get down!" anymore when
    the president is about to be attacked. Now they have to yell
    "Donald, duck!
  </p>
  // </div>
  );
};





const Likes = () => {

  const [likes, setLikes] = useState(0);

  // const upLikes = () => {
  //   setPocet(likes + 1);
  // }

  // const downLikes = () => {
  //   setPocet(likes + 1);

  // }

  const handleLikesUpChange = (event) => {
      setLikes(event.target.value)

  }

  const handleLikesDownChange = (event) => {
    setLikes(event.target.value)

}

  return (
    //<div className="joke__likes">
<>

      <button id="btn-up" className="btn-like btn-like--up" onClick={handleLikesUpChange}></button>

      <span id="likes-up" className="likes-count likes-count--up" onClick={ () => setLikes(likes + 1 ) }> {likes} </span>

      <button id="btn-down" className="btn-like btn-like--down"onClick={handleLikesDownChange}></button>


      <span id="likes-down" className="likes-count likes-count--down" onClick={ () => setLikes(likes + 1) }>{likes} </span>

      </>
    //</div>
  );
};




const App = () => {
  <>

  
  <div className="container">

    { books.map( joke => <joke
            key={joke.id}
            id={joke.id}
            avatar={joke.avatar}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          /> )


    }
    
  <div className="joke">

  <div className="joke__body">
  <div className="joke__user">
  <JokerUser />
  </div>

  <div className="joke__text">
  <JokeText />
  </div>
  <div className="joke__likes">
  <Likes />
  </div>

  </div>
  </div>
  </div>
  
  </>
};

render(<App />, document.querySelector('#app'));

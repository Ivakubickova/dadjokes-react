import React, {useState} from 'react';
import './style.css';

const Joke = ( {userAvatar, userName, text, likes, dislikes} ) => {

    return (

        <div className="joke">
        <div className="joke__body">
        <div className="joke__user" src={`Joke/assets/${id}` } >
        <p className="user-name">{name}</p>
        <p className="joke__text">{text}</p>
        <div className="joke__likes">{likes} {dislikes}</div>

    

      
        </div>

        </div>
        </div>
        

    
    );

}




export default Joke;
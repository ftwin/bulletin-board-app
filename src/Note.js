import React, { useState } from "react";
import Comment from "./Comment"
import firebase from './Firebase.js';

const Notes = (props)=> {
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = e => {
    //reset error message
    setErrorMessage("");
    //record the user input
    setComment(e.target.value);
  };   

  const handleSubmit = e => {
    e.preventDefault()
    const regEx = /\S/;

    if (regEx.test(comment)) {
      //push comment to db
      firebase.database().ref(props.noteId).child('comments').push(comment);
      //reset error message
      setErrorMessage("");
      //reset the user input fields
      setComment("");
    } else {
      setErrorMessage("please enter a comment");
    };      
  };

  const commentsArray = Object.entries(props.savedComments);
  return (
    <div className="note">
      <div>
        <img src={props.noteImage} alt={props.altText}/>
      </div>
      <div className="noteContent">
        <p>
            {props.noteText}
        </p>
      </div>
      <div className="comment">
        <form action="">
          <label className="commentLabel" htmlFor={props.noteId + "comment"}>Add your comment here</label>
          {errorMessage !== '' ? <div className="error">{errorMessage}</div> : ''}
          <textarea onChange={handleChange} name="comment" id={props.noteId + "comment"} cols="30" rows="3"  value={comment}></textarea>
          <button className="commentButton" onClick={handleSubmit} name="addNote" id="addNote" aria-label="add comment">+</button>
        </form>
      </div>

      {
        commentsArray.reverse().map((comment) => {
          return (
            <Comment key={comment[0]} noteId={props.noteId} commentText={comment[1]} />
          )
        })
      }      
    </div>
  );
}

export default Notes;


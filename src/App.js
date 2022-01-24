import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from './Firebase.js';
// import Notes from './Note.js';
// import NewNote from './NewNote.js';

const App = () => {

  const [notes, setNotes ] = useState();
  // const [image, setImage ] = useState("");
  // const [alt, setAlt ] = useState("");

  
  //connect app to firebase
  useEffect(()=> {
    const dbRef = firebase.database().ref();
    let notesArray;
    dbRef.on('value', (snapshot) =>{
      const notesVal = snapshot.val();
      notesArray = notesVal;
    console.log(notesArray)
    })
    setNotes([notesArray]);
  },[]);

  return (
    <div className="container">
      <main className="wrapper">
        <div className="info">
          <h1>Bulletin Board</h1>
          {/* <NewNote newNoteProp={this.addNewNote} /> */}
        </div>
        {
          notes
          // .reverse().map((note) => {
          //   return (
          //     <Notes 
          //       noteText={note[1].note} 
          //       key={note[0]} 
          //       noteId={note[0]}
          //       noteImage={note[1].image}
          //       altText={note[1].altText}
          //       savedComments={note[1]} 
          //       newCommentProp={this.addNewComment} 
          //     />
              
          //   )
          // })
        }          
      </main>
      <footer><p>Copyright <a href="https://www.louchaney.com">Lou Chaney</a> 2022</p></footer>
    </div>
  );
}

export default App;

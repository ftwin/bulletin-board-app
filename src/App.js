import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from './Firebase.js';
import Notes from './Note.js';
import NewNote from './NewNote.js';

const App = () => {

  const [notes, setNotes ] = useState([]);

  
  //connect app to firebase
  useEffect(()=> {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) =>{
      const notesVal = snapshot.val();
      let notes = Object.entries(notesVal);
      notes = notes.map(note => ({id: note[0], ...note[1]})).reverse();
      setNotes(notes);
    })
  },[]);

  return (
    <div className="container">
      <main className="wrapper">
        <div className="info">
          <h1>Bulletin Board</h1>
          <NewNote/>
        </div>
        {
          notes.map((note, index) => {
            return (
              <Notes 
                noteText={note.note} 
                key={index} 
                noteId={note.id}
                noteImage={note.image}
                altText={note.altText}
                savedComments={note.comments}
              />
              
            )
          })
        }          
      </main>
      <footer><p>Copyright <a href="https://www.louchaney.com">Lou Chaney</a> 2022</p></footer>
    </div>
  );
}

export default App;
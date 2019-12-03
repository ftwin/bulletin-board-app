import React, { Component } from 'react';
import './App.css';
import firebase from './Firebase.js';
import Notes from './Note.js';
import NewNote from './NewNote.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notesApp: [],
      notes: [],
      image: "",
      alt: ""
    }
  }

  //connect app to firebase
  componentDidMount(){
    const dbRef = firebase.database().ref();

    //listen on the dbRef for when the value changes
    dbRef.on('value', (snapshot) =>{
      const notes = snapshot.val();
      const notesArray = Object.entries(notes)    
      this.setState({
        notes: notesArray
      })
    })
  }


  render(){
    return (
      <div className="container">
        <main className="wrapper">
          <div className="info">
            <h1>Bulletin Board</h1>
            <NewNote newNoteProp={this.addNewNote} />
          </div>
          {
            this.state.notes.map((note) => {
              return (
                <Notes 
                  noteText={note[1].note} 
                  key={note[0]} 
                  noteId={note[0]}
                  noteImage={note[1].image}
                  noteAltText={note[1].altText}
                  savedComments={note[1]} 
                  newCommentProp={this.addNewComment} 
                />
                
              )
            })
          }          
        </main>
        <footer><p>Copyright Lou Chaney 2019</p></footer>
      </div>
    );
  }
}

export default App;

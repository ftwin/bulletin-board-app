import React, { Component } from 'react';
import './App.css';
import firebase from './Firebase.js';
import Notes from './Note.js';
import NewNote from './NewNote.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notesApp: [],
      notes: [],
      image: ""
    }
  }

  //connect app to firebase
  componentDidMount(){
    const dbRef = firebase.database().ref();

    //listen on the dbRef for when the value changes
    dbRef.on('value', (snapshot) =>{
      const notes = snapshot.val();
      const notesArray = Object.entries(notes)
      // console.log(Object.entries(notes));
      // console.log(notesArray);
    
      this.setState({
        notes: notesArray
      })

      // const commentsArray = Object.entries(notesArray[1].comments)
      // console.log(commentsArray);
    })

    // axios({
    //   url: `https://api.unsplash.com/photos/random`,
    //   method: `GET`,
    //   dataResponse: `json`,
    //   params: {
    //     client_id: `3538ec3e67ff5208b17b884280d4f5548757cf54956c39cbe73c070ec5442549`
    //   }
    // }).then(response => {
    //   console.log(response);
    //   this.setState({
    //     image: response.data.urls.small
    //   });
    //   console.log(this.state.image);
    // });
  }

  //when new note form submitted
  addNewNote = (e, noteContent) => {
    e.preventDefault()
    // console.log(noteContent)

    const dbRef = firebase.database().ref();

    //check that input isn't empty then push to db
    if(noteContent !== "") {
      dbRef.push({note: noteContent});
    };
  }

  //when new comment form submitted
  addNewComment = (e, commentContent, noteId) => {
    e.preventDefault()
    console.log(commentContent)

    const dbRef = firebase.database().ref();

    //check that input isn't empty then push to db
    if (commentContent !== "") {
      firebase.database().ref(noteId).child('comments').push(commentContent);
    };
  }

  render(){
    return (
      <div className="container">
        <div className="wrapper">

          <div className="middleColumn">
            <h1>Bulletin Board</h1>
            <NewNote newNoteProp={this.addNewNote} />
          </div>
           
            {
              this.state.notes.map((note) => {
                return (
                  <Notes noteText={note[1].note} key={note[0]} savedComments={note[1].comments} newCommentProp={this.addNewComment} />
                  
                )
              })
            }            


        </div>
      </div>
    );
  }
}

export default App;

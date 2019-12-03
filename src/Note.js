import React, { Component } from "react";
import Comment from "./Comment"
import firebase from './Firebase.js';

  class Notes extends Component {
    constructor(){
        super();
        this.state = {
          comment: "",
          savedComments: [],
          notes: [],
          errorMessage: ""
        }
    }

    handleChange = e => {
      this.setState({
        //reset error message
        errorMessage: "",
        //record the user input
        comment: e.target.value
      });
 
    };

    handleSubmit = e => {
      e.preventDefault()
      if (this.state.comment !== "") {
        //push comment to db
        firebase.database().ref(this.props.noteId).child('comments').push(this.state.comment);
        //reset error message
        this.setState({
          errorMessage: ""
        })

        

        //reset the user input fields
        this.setState({
          comment: ""
        });

      } else {
        this.setState({
          errorMessage: "please enter a comment"
        })
      };      
    };

    
    

    render() {
      const commentsArray = Object.entries(this.props.savedComments)
      const commentsArray2 = Object.entries(commentsArray[1][1])
      return (
        <div className="note">
          <div>
            <img src={this.props.noteImage} alt={this.props.altText}/>
          </div>
          <div className="noteContent">
            <p>
                {this.props.noteText}
            </p>
          </div>
          <div className="comment">
            <form action="">
              {this.state.errorMessage !== '' ? <div className="error">{this.state.errorMessage}</div> : ''}
              <textarea onChange={this.handleChange} name="comment" id="comment" cols="30" rows="3" placeholder="comment" value={this.state.comment}></textarea>
              <button className="commentButton" onClick={this.handleSubmit} name="addNote" id="addNote" aria-label="add comment">+</button>
            </form>
          </div>

            {
              commentsArray2.map((comment) => {

                return (
                  <Comment key={comment[0]} noteId={this.props.noteId} commentText={comment[1]} />
                  // <Comment key=

                )
              })
            }      
        </div>
        
      );
    }
  }


export default Notes;


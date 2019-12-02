import React, { Component } from "react";
import Comment from "./Comment"
import firebase from './Firebase.js';

  class Notes extends Component {
    constructor(){
        super();
        this.state = {
          comment: "",
          savedComments: [],
          notes: []
        }
    }

    handleChange = e => {
      this.setState({
        //record the user input
        comment: e.target.value
      });
 
    };

    handleSubmit = e => {
      //push comment to db
      this.props.newCommentProp(e, this.state.comment, this.props.noteId);

      //reset the user input fields
      this.setState({
        comment: ""
      });
    };

    
    

    render() {
      const commentsArray = Object.entries(this.props.savedComments)
      const commentsArray2 = Object.entries(commentsArray[1][1])
     console.log(commentsArray)
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
              <textarea onChange={this.handleChange} name="comment" id="comment" cols="30" rows="3" placeholder="comment" value={this.state.comment}></textarea>
              <button className="commentButton" onClick={this.handleSubmit} name="addNote" id="addNote" >+</button>
            </form>
          </div>
            {
            

            }

            {
              commentsArray2.map((comment) => {
                // console.log(comment);

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


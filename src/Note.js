import React, { Component } from "react";
import Comment from "./Comment"
import firebase from './Firebase.js';

  class Notes extends Component {
    constructor(){
        super();
        this.state = {
          comment: "",
          savedComments: []
        }
    }

    // //connect component to firebase
    // componentDidMount() {
      

    //   const commentsArray = Object.entries(this.props.savedComments)
    //   console.log(commentsArray);

    //   this.setState({
    //     savedComments: commentsArray
    //   })


    //   const dbRef = firebase.database().ref();

    //   console.log(this.props.savedComments);

    //   // //listen on the dbRef for when the value changes
    //   // dbRef.on('value', (snapshot) => {
    //   //   const notes = snapshot.val();
    //   //   const notesArray = Object.entries(notes)
      
    //   //   // const commentsArray = notesArray.map((array, index)=> {
    //   //   //   let obj = {};
    //   //   //   obj[array[0]] = array[1].comments;

    //   //     // if(array[1].comments !== undefined) {
    //   //     //   return Object.values(array[1].comments);
    //   //     // }  

    //   //     // return obj
    //   //   // })

    //   //   console.log(notesArray);
    //   //   this.setState({ savedComments: notesArray});
        
    //   // })
    // }

    
    handleChange = e => {
      this.setState({
        //record the user input
        comment: e.target.value
      });
      // console.log(this.state.comment);
      // console.log(this.props.displayCommentsProp);
      // console.log(this.props.noteId);
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
     
      return (
        <div className="note">
          <div>
            <img src="" alt=""/>
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
          <div className="comments">
            {
              this.state.savedComments.map((comment) => {
                console.log(comment);

                return (
                  <Comment commentText={comment} commentId={comment[0]} />

                )
              })
            }      
          </div>
        </div>
        
      );
    }
  }


export default Notes;


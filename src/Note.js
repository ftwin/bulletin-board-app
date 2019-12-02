import React, { Component } from "react";
import Comment from "./Comment"
import { throwStatement } from "@babel/types";

  class Notes extends Component {
      constructor(){
          super();
          this.state = {
            comment: ""
          }
      }
    
    handleChange = e => {
      this.setState({
        //record the user input
        comment: e.target.value
      });
      // console.log(this.state.comment);
      console.log(this.props.displayCommentsProp);
      console.log(this.props.noteId);
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
        <div className="note" key={this.props.noteId}>
          <div>
            <img src="" alt=""/>
          </div>
          <div className="noteContent" id={this.props.noteId}>
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
            {/* {
              this.props.displayCommentsProp.map((comment) => {
                return (
                  <Comment commentText={comment[1].comments} />

                )
              })
            }    */}
            <Comment commentText="commentssss"/>
          </div>
        </div>
        
      );
    }
  }


export default Notes;


import React, { Component } from "react";
import axios from "axios";

  class NewNote extends Component {
    constructor() {
      super();
      this.state = {
        note: "",
        image: "",
        alt: ""
      };
    }

    handleChange = e => {
      this.setState({
        //record the user input
        note: e.target.value
      });
    };

    handleSubmit = e => {
      //make api call for image
      // this.getImage();
      
      //push user input to db
        this.props.newNoteProp(e, this.state.note);

        //reset the user input fields
        this.setState({
          note: ""
        });
      
    };

    render() {
      return (
        <div className="newNote">
          <form action="">
            <textarea onChange={this.handleChange} value={this.state.note} rows="12" cols="30" name="newNote" id="newNote" placeholder="add your note here"
            ></textarea>
            <button onClick={this.handleSubmit} name="addNote" id="addNote">
              +
            </button>
          </form>
        </div>
      );
    }
  }

  export default NewNote;
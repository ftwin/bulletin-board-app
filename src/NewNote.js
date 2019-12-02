import React, { Component } from "react";
import axios from "axios";

  class NewNote extends Component {
    constructor() {
      super();
      this.state = {
        note: "",
        image: ""
      };
    }

    getImage = e => {
      axios({
        url: `https://api.unsplash.com/photos/random`,
        method: `GET`,
        dataResponse: `json`,
        params: {
          client_id: `3538ec3e67ff5208b17b884280d4f5548757cf54956c39cbe73c070ec5442549`
        }
      }).then(response => {
        console.log(response);
        this.setState({
          allzards: response.data
        });
      });
    }

    handleChange = e => {
      this.setState({
        //record the user input
        note: e.target.value
      });
    };

    handleSubmit = e => {
      //push user input to db
      this.props.newNoteProp(e, this.state.note);

      //make api call for image
      this.getImage();

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
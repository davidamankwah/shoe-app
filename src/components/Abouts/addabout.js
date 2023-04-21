import React from 'react'
import axios from "axios";


export class AddAbout extends React.Component {

  //the constructor initialize the state of a React component and bind event handlers to the component's methods.
  constructor() {
      super();
      //binding events
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChangeMember = this.onChangeMember.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
      this.onChangeTexts = this.onChangeTexts.bind(this);
      //states of plan
      this.state = {
          member: '',
          title: '',
          text: '',
          texts: ''
      }
  }

  //function execute when button click
  handleSubmit(e) {
      e.preventDefault();
      console.log(`Button clicked 
      ${this.state.member},
      ${this.state.title},
      ${this.state.text},
      ${this.state.texts}`);

      //define contact object
      const about = {
          member: this.state.member,
          title: this.state.title,
          text: this.state.text,
          texts: this.state.texts
      }
      //a post request to the server. sending a contact object to the server
      axios.post('http://localhost:4000/api/abouts', about)
          .then()
          .catch();

      //setters
      this.setState({
          member: '',
          title: '',
          text: '',
          texts: ''
      })
  }

  //add values to states
  onChangeMember(e) {
      this.setState({
          member: e.target.value
      })
  }
  onChangeTitle(e) {
      this.setState({
          title: e.target.value
      })
  }
  onChangeText(e) {
      this.setState({
          text: e.target.value
      })
  }

  onChangeTexts(e) {
    this.setState({
        texts: e.target.value
    })
}


  render() {
      return (
          <div>
              <h3>Contact Form</h3>

              <form onSubmit={this.handleSubmit}>
                  {/* add name */}
                  <div className="form-group">
                      <label>Member: </label>
                      <input type="text"
                          className="form-control"
                          value={this.state.member}
                          onChange={this.onChangeMember}
                      />
                  </div>
                  {/* add email */}
                  <div className="form-group">
                      <label>Title: </label>
                      <input type="text"
                          className="form-control"
                          value={this.state.title}
                          onChange={this.onChangeTitle}
                      />
                  </div>

                  {/* add message */}
                  <div className="form-group">
                      <label>Text: </label>
                      <input type="text"
                          className="form-control"
                          value={this.state.text}
                          onChange={this.onChangeText}
                      />
                  </div>

                  <div className="form-group">
                      <label>Texts: </label>
                      <input type="text"
                          className="form-control"
                          value={this.state.texts}
                          onChange={this.onChangeTexts}
                      />
                  </div>

                   {/* submit button to add contacts*/}
                  <button className="btn btn-danger" type="submit" value="Submit" >
                    Submit
                    </button>
              </form>
              <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
          </div>
      );
  }
}
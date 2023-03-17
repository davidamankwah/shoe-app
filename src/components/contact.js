import React from 'react'
import axios from "axios";
import { Button } from 'react-bootstrap';

export class Contact extends React.Component {

  constructor() {
      super();
      //binding events
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChangeContactName = this.onChangeContactName.bind(this);
      this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
      this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
      //states of plan
      this.state = {
          name: '',
          email: '',
          message: ''
      }
  }

  //function execute when button click
  handleSubmit(e) {
      e.preventDefault();
      console.log(`Button clicked 
      ${this.state.name},
      ${this.state.email},
      ${this.state.message}`);

      //define plan object
      const contact = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      //a post request to the server. sending a plan object to the server
      axios.post('http://localhost:4000/api/contacts', contact)
          .then()
          .catch();

      //setters
      this.setState({
          name: '',
          email: '',
          message: ''
      })
  }

  //add values to states
  onChangeContactName(e) {
      this.setState({
          name: e.target.value
      })
  }
  onChangeContactEmail(e) {
      this.setState({
          email: e.target.value
      })
  }
  onChangeContactMessage(e) {
      this.setState({
          message: e.target.value
      })
  }


  render() {
      return (
          <div>
              <h3>Contact Formk</h3>

              <form onSubmit={this.handleSubmit}>
                  {/* add task name */}
                  <div className="form-group">
                      <label>Name: </label>
                      <input type="text"
                          className="form-control"
                          value={this.state.name}
                          onChange={this.onChangeContactName}
                      />
                  </div>
                  {/* add description */}
                  <div className="form-group">
                      <label>Email: </label>
                      <input type="email"
                          id="email"
                          className="form-control"
                          value={this.state.email}
                          onChange={this.onChangeContactEmail}
                      />
                  </div>

                  {/* add priorty */}
                  <div className="form-group">
                      <label>Message: </label>
                      <textarea type="text"
                          className="form-control"
                          value={this.state.message}
                          onChange={this.onChangeContactMessage}
                      />
                  </div>

                   {/* submit button to add plans*/}
                  <button className="btn btn-danger" type="submit" value="Submit" >
                    Submit
                    </button>
              </form>
          </div>
      );
  }
}
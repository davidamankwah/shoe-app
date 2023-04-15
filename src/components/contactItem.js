//imports
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button' //import buttom for styling
import axios from "axios"; //import to use axios
export class ContactItem extends React.Component {

    // constructor
    constructor() {
        super();

        //binding event
        this.DeleteContact = this.DeleteContact.bind(this);
    }

    // delete book function
    //invoked when delete button clicked
    DeleteContact(e) {
        e.preventDefault();
    
        //make a HTTP Request with Delete method and pass as part of the
        //url
        axios.delete('http://localhost:4000/api/contact/' + this.props.contact._id)
            .then((res) => {
                this.props.ReloadData(); //invoke methode to refresh 
            })
            .catch()
    }

    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.contact.name}</Card.Header>
                    <Card.Body>
                       
                               <p>
                               {this.props.contact.email}
                                </p>
                                <p>
                                {this.props.contact.message}
                                </p>
                    
                    </Card.Body>
                    {/* link allows you to edit a book.*/}
                    {/* _id is identify each book.  */}
                    {/* Send you where can to edit book */}
                    {/* like a button to click */}
                    <Link to={'/editContact/' + this.props.contact._id} className="btn btn-primary">Edit</Link>

                    {/* red button that allows you to delete */}
                    {/* invoke DeleteBook function when clicked */}
                    {/* use onClick event */}
                    <Button variant="danger" onClick={this.DeleteContact}>Delete</Button>
                </Card>
            </div>
        );
    }
}
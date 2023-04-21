import React from "react";
import { Contact } from "./contact"; //imported books
import axios from "axios";

export class ListContact extends React.Component{

    //constructor
    constructor(){
        super()
        this.ReloadData = this.ReloadData.bind(this); //bind event
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/contacts')
        .then((response)=>{
            this.setState({contacts:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    //a method to refresh data from the server
    ReloadData() {
        axios.get('http://localhost:4000/api/contacts')
        .then((response)=>{
            this.setState({contacts:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        contacts:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>Your Messages!</h3>

                {/* pass ReloadData method */}
                <Contact contact={this.state.contacts} ReloadData={this.ReloadData}></Contact>
            </div>
        );
    }
}
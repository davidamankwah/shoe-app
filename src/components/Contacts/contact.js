import React from "react";
import { ContactItem } from "./contactItem"; //import contactItem

export class Contact extends React.Component{
    render(){
        return this.props.contact.map(
            (contact)=>{
                // pass ReloadData method
                return <ContactItem contact={contact} key={contact._id} ReloadData={this.props.ReloadData}></ContactItem>
            }
        );
    }
}
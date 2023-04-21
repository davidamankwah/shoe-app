import React from "react";
import { AboutItem } from "./aboutItem"; //import bookitem

export class About extends React.Component{
    render(){
        return this.props.about.map(
            (about)=>{
                // pass ReloadData method
                return <AboutItem about={about} key={about._id} ReloadData={this.props.ReloadData}></AboutItem>
            }
        );
    }
}
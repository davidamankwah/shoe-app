import React from "react";
import { About } from "./about"; //imported About
import axios from "axios";

export class ViewAbout extends React.Component{

    //constructor
    constructor(){
        super()
        this.ReloadData = this.ReloadData.bind(this); //bind event
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/abouts') // Fetch the about data from the server
        .then((response)=>{
            this.setState({abouts:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    //a method to refresh data from the server
    ReloadData() {
        axios.get('http://localhost:4000/api/abouts')
        .then((response)=>{
            this.setState({abouts:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        abouts:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>About!</h3>
                <p>Some text about who we are and what we do.</p>
              <p>Resize the browser window to see that this page is responsive by the way.</p>
                <h2>Our Team!</h2>
                {/* pass ReloadData method */}
                {/* display all about details */}
                <About about={this.state.abouts} ReloadData={this.ReloadData}></About>
                <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
            </div>
        );
    }
}
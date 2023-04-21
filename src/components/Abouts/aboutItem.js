//imports
import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import axios from "axios"; //import to use axios
export class AboutItem extends React.Component {



    render() {
        return (
            <div>
              <div class="row">
              <div class="column">
                <div class="card">
                
                  <div class="container">
                    <h2>{this.props.about.member}</h2>
                    <p class="title">{this.props.about.title}</p>
                    <p>{this.props.about.text}.</p>
                    <p>{this.props.about.texts}</p>
                    <p><Button href='/addcontact'>Contact</Button></p>
                  </div>
                </div>
              </div>

            </div>
       
            </div>
        );
    }
}
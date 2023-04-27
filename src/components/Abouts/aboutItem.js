//imports
import React from "react";
import { Button } from '@mui/material';

export class AboutItem extends React.Component {



    render() {
        return (
            <div>
              <div class="row">
              <div class="column">
                <div class="card">
                {/* outputs group member, job title and group details */}
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
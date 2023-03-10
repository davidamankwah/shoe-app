import React from 'react'; //import react
import { Button } from '@mui/material';

export class About extends React.Component{ //inherits from react.component 
    render(){
      //displays hello world!” as a <h1>tag only.
      //displays the time under
        return ( 
            <div>
              <h1>About</h1>  {/*heading */}

              <p>Some text about who we are and what we do.</p>
              <p>Resize the browser window to see that this page is responsive by the way.</p>

              <h2 >Our Team</h2>
              <div class="row">
              <div class="column">
                <div class="card">
                
                  <div class="container">
                    <h2>David Sarfo</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>David@example.com</p>
                    <p><Button href='/contact'>Contact</Button></p>
                  </div>
                </div>
              </div>

              <div class="column">
              <div class="card">
              
                <div class="container">
                  <h2>Mateusz Pietrzyk</h2>
                  <p class="title">Art Director</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>Mateusz @example.com</p>
                  <p><Button href='/contact'>Contact</Button></p>
                </div>
              </div>
            </div>
              
            </div>

            <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
            </div>
            
          );
    }
}
//imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditContact() {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        //reads record to database
        axios.get('http://localhost:4000/api/contact/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                //update variables
                setName(response.data.name);
                setEmail(response.data.email);
                setMessage(response.data.message);
            })
            .catch()
    }, []);

    //exeute with when submit edit
    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name: name,
            email: email,
            message: message
        }
        //Sends you to the contact you want edited
        //pass up edited conatct
        axios.put('http://localhost:4000/api/contact/' + id, newContact)
            .then()
            .catch();
    }

    return (
        <div>
            <h3>Edit Contact</h3>
            {/* call handleSubmit event when clicking edit contact */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Email: </label>
                    <input type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Message: </label>
                    <input type="text"
                        className="form-control"
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                    />
                </div>
                
                <input type="submit" value="Edit Contact"></input> {/* submit to edit contact */}
            </form>
        </div>
    );
}
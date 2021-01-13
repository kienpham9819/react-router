import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
                This is about contact<br/>
                <button className="btn btn-primary">Cho phep</button>
                <button className="btn btn-primary">Ko Cho phep</button>
                <Prompt 
                    when={false}
                    message={(location)=>("are you sure going to "+ location.pathname)}
                 />
            </div>
        );
    }
}


export default Contact;
import React from 'react';
import './contact.css';

function Contact() {
    return(
        <body>
            <div>
                <div className='containter'>
                    <div className='row col-12 justify-content-center'>
                        <h2 className='introformatintern text-md-center'>Contacts</h2>
                    </div>
                </div>

                <p className='contacttext'>in the works...</p>
                <ul className='ul'>
                    <li className='li'>
                        <input className='inputName' type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className='li'>
                        <input className='inputEmail' type="email" name="email" placeholder="Email" required />
                    </li>
                    <li className='li'>
                        <input className='inputSubject' placeholder="Subject" type="text" name="Subject" required />
                    </li>
                    <li className='li'>
                        <textarea className='inputMessage' placeholder="Message" name="message" required></textarea>
                    </li>
                    <input type="submit" className='flat-button' value="Send"/>
                </ul>
            </div>
        </body>
    )
}

export default Contact;
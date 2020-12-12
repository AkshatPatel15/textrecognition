import react from 'react';
import './Contact.css';

const Contact = () => {
    return(
        <>
        <div className = 'outer_div'>
        <div className = 'contact_first_div'>
        <div className = 'contact_second_div'>
            <img className = 'contact_image' src = 'address.png' alt = 'img' ></img>
            <label className = 'contact_label'>Address:
            <p>B/23, Siddhi vinayak soc.,<br/>B/H ram vatika, Waghodia road,<br/>Vadodara</p>
            </label>
        </div>
        
        <div className = 'contact_second_div'>
            <img className = 'contact_image' src = 'phone.png' alt = 'img' ></img>
            <label className = 'contact_label'>Contact:
            <p>9662482514</p>
            </label>
        </div>
        
        <div className = 'contact_second_div'>
            <img className = 'contact_image' src = 'email.png' alt = 'img' ></img>
            <label className = 'contact_label'>Email:
            <p>Akshat.170410116053@gmail.com</p>
            </label>
        </div>
        </div>
        <div className = 'contact_third_div'>
            <label>
                Send Massage
            </label>
            <input className = 'contact_input' type = 'text' placeholder = 'Full Name'/>
            <input className = 'contact_input' type = 'text' placeholder = 'Email'/>
            <input className = 'contact_input_massage' type = 'text' placeholder = 'Type your Massage...'/>
            <button className = 'contact_button'>Send</button>
        </div>   
        </div>
        </>

    );
};

export default Contact;
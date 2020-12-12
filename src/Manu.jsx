import react from 'react';
import "./index.css";
import  { Link } from "react-router-dom";

const Manu = () => {
    return (
        <>
        <header><img className = 'logo' src = 'logo192.png' alt = 'logo'/>
        <ul align = 'center' className = 'ul_manu'>
        
            <li className = 'li_manu'><Link className = 'a_manu' to = '/'>Home</Link></li>
            <li className = 'li_manu'><Link className = 'a_manu' to = '/History'>History</Link></li>
            <li className = 'li_manu'><Link className = 'a_manu' to = "/About">About</Link></li>
            <li className = 'li_manu'><Link className = 'a_manu' to = '/Contact'>Contact</Link></li>
            <li className = 'li_manu'><Link className = 'a_manu' to = '/Accountinfo'>Account Info</Link></li>
            <li className = 'li_manu'><a href = '#'><button>Login</button></a></li>
            
        </ul>
       
        </header>
        </>
    );
};

export default Manu;
import React from "react";
import user from "../images/logo512.png";
const ContactCard = (props) => {
    
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user image" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
                <i className="trash alternate outline icon"
                style={{color:"red", marginTop:"7px", float:"right"}}></i>
        </div>
    );
};
export default ContactCard;
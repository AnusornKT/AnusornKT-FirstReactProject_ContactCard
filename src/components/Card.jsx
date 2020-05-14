import React from "react";
import Avatar from "./Avatar";
import InfoTel from "./InfoTel.jsx";
import InfoEmail from "./InfoEmail.jsx";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <p>ID: {props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img} />
            </div>

            <div className="bottom">
                <InfoTel infoTel={props.tel} />
                <InfoEmail infoEmail={props.email}/>
                
            </div>
        </div>
    );
}

export default Card;
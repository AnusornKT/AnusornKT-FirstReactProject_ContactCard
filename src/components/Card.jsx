import React from "react";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img classNmae="circle-img"
                src={props.img}
                alt="avatar_img"
                />
            </div>

            <div className="bottom">
                <p classNmae="info">{props.tel}</p>
                <p classNmae="info">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
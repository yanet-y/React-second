import React from "react";

function Card({props}){
    return(
        <div className="card">
            <img src={props.img} alt="image" width="98%" height={150} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );

}

export default Card;
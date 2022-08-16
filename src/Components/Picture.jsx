import React from "react";

export const Picture = ( props ) => {
    return (
        <div className="image-item">
            <img src={props.picture.url_l} alt={props.picture.title} />
            <div className="overlay"><span>{props.picture.title}</span></div>
        </div>
    );
}
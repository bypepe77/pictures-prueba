import React, { useEffect, useState } from "react";
import { getPictures } from "../Services/pictures";
import { Picture } from "../Components/Picture";
import { Search } from "../Components/Search";

export const Home = () => {

    const [ pictures, setPictures ] = useState([]);

    useEffect( () => {
        ( async () => {
            setPictures( await getPictures() );
        })();
    } , []);

    const updatePictures = async ( newSearch ) => { setPictures( await getPictures( newSearch ) ); }

    return (
        <div className="container">
            <h2 className="heading-text">Image <span>Searcher</span></h2>
            <Search updatePictures={ updatePictures }/>
            <div className="image-gallery">
            {pictures.map( (picture, index ) => {
                return (
                    <div key={index}>
                        <Picture picture={picture} />
                    </div>
                )
            } )}
            </div>
        </div>
    );
}
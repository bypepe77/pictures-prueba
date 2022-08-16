import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Search = ( props ) => {

    const [ tag, setTag ] = useState("");

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( tag.length > 0 ){
            props.updatePictures( tag );
        }else{ 
           toast.error('Please enter a tag!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div className="align-center">
            <form onSubmit={ handleSubmit }>
                <input clasName="input-search" type="text" name="search" placeholder="Enter what you are looking for..." value={ tag } onChange={ ( e ) => { setTag(e.target.value) }}/>
                <button type="submit">Search</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
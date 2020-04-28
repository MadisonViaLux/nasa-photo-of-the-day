import React from "react";
import '../App.css'


const Header = (props) => {

    const JIC = () => {
        if(props.copyright){
            return <p>By: {props.copyright}</p>
        } else {
            return <p>By: *undisclosed*</p>
        }
    }

    return(
        <div className='header'>

            <h3>This is {props.title}</h3>

            <div className='copyRight'>
                <p>Taken: {props.date}</p>

                {JIC()}
            </div>

        </div>
    )
};


export default Header
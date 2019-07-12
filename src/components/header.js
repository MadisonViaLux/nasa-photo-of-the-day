import React, { useState } from "react";



const Header = (props) => {

    console.log(props)

    // if (!props.photoOfTheDay) return <h3>Loading...</h3>;

    // const [header, setHeader] = useState([props])


    // console.log(header)

    return(
        <div>

            <p>this is {props.title}</p>


        </div>
    )
};


export default Header
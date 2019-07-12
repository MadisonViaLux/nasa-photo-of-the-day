import React from "react";
import '../App.css'


const Header = (props) => {

    console.log(props)

    // if (!props.photoOfTheDay) return <h3>Loading...</h3>;

    // const [header, setHeader] = useState([props])


    // console.log(header)

    return(
        <div className='header'>

            <h3>This is the {props.title}</h3>

            <div className='copyRight'>
                <p>Taken: {props.date}</p>



                <p>By: {props.copyright}</p>
            </div>

        </div>
    )
};


export default Header
import React from 'react'
import '../App.css'


export default function Info(props) {

    const JIC = () => {
        if(props.copyright){
            return <p>Copyright: {props.copyright} || </p>
        } else {
            return null
        }
    }


    return(
        <div className='info-footer'>
            <p><h2>Description:</h2> {props.explanation}</p>

            <p>{JIC()} Version: {props.service_version}</p>
        </div>
    )
}
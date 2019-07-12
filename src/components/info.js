import React from 'react'
import '../App.css'


export default function Info(props) {


    return(
        <div className='info-footer'>

            <p>{props.explanation}</p>

            <p>{props.copyright} {props.service_version}</p>
        </div>
    )
}
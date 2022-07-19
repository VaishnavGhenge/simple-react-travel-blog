import React from "react"
import "./App.css"

function Section(props) {
    return (
        <div className="section">
            <img src={props.img} className="loc-img" />
            <div className="data">
                <div className="location">
                    <img src="/location-pin.svg" className="loc-pin" />
                    <p className="loc-country">{props.loc}</p>
                    <a href="{props.map-url}" className="loc-url">View on Google Maps</a>
                </div>
                <h1 className="loc-title">{props.title}</h1>
                <h4 className="loc-dates">{props.start} - {props.end}</h4>
                <p className="loc-description">{props.des}</p>
            </div>
        </div>
    )
}

export default Section;
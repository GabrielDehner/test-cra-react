import React from 'react'
import "./Card.css"
import PropTypes from "prop-types";

const Card = ({lang, url, fcolor, scolor}) => {
    return (
        <div className="card" style={{
            background: `linear-gradient(to left, ${fcolor}, ${scolor})`
        }}>
            <img src={url} alt={lang}/>
            <h3>Lenguaje: {lang}</h3>
        </div>
    )
};

Card.propTypes = {
    lang: PropTypes.string,
    url: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
};
export default Card

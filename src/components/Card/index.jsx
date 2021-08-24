import React from 'react'
import valueCard from '../../assets/img/Value card.png'
import image from '../../assets/img/IMG.png';
import './styles.css'

function Card() {
    return (
        <>
            <section className="tarjeta">
                <img src={valueCard} alt="" className="baseimg"/>
                <img src={image} alt="" className="frontimg"/>
            </section>

            <section className="tabla">
                <div className="inversion">
                    <h1>Inversion</h1>
                    <h2>$1.600.000</h2>
                </div>
                <hr />
                <div className="rendimiento">
                    <h1>Rendimiento</h1>
                    <h2>-$30.000</h2>
                </div>
            </section>
        </>
        
    )
}

export default Card

import React from 'react'
import robot from '../../assets/img/holding_donut.png'
import estatus from '../../assets/img/Domicilio.png'
import skadia from '../../assets/img/logo.png'
import quince from '../../assets/img/Frame 31.png'
import './styles.css'

function Portafolio() {
    return (
        <>
        <section className="portafolioh">
            <h1>Conoce tu portafolio</h1>
            <img src={estatus} alt="" />
        </section>

        <section className="portafoliob">
            <div className="content">
                <img src={robot} alt="" className="robot"/>
                <div>
                    <div className="logo">
                        <img src={skadia} alt="" />
                        <img src={quince} alt="" />
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <h2></h2>
        </section>
        </>
    )
}

export default Portafolio

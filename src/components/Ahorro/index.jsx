import React from 'react'
import miniatura from '../../assets/img/thumb.png'
import play from '../../assets/img/play_circle_outline_24px.png'
import azul from '../../assets/img/Vector 6.png'
import puntoazul from '../../assets/img/Ellipse 1.png'
import puntogris from '../../assets/img/Ellipse 1 (1).png'
import './styles.css'

function Ahorro() {
    return (
        <section className="ahorro">
            <section className="ahorro-head">
                <h1>Los P*t@s del ahorro</h1>
            </section>
            <section className="ahorro-body">
                <div className="video">
                    <img src={miniatura} alt="" className="miniatura"/>
                    <img src={play} alt="" className="play"/>
                    <img src={azul} alt="" className="azul"/>
                    <p className="azul-titulo">Esto es AHORRO</p>
                    <p className="azul-parrafo">Conoce como nuestro RoboAdvisor crea el mejor <br /> portafolio de inversión para ti.</p>
                </div>
                <div className="puntos">
                    <img src={puntoazul} alt="" />
                    <img src={puntogris} alt="" />
                    <img src={puntogris} alt="" />
                </div>
            </section>
        </section>
    )
}

export default Ahorro

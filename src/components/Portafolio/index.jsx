import React from 'react'
import robot from '../../assets/img/holding_donut.png'
import estatus from '../../assets/img/Domicilio.png'
import skadia from '../../assets/img/logo.png'
import quince from '../../assets/img/Frame 31.png'
import izquierda from '../../assets/img/Frame 73.png'
import derecha from '../../assets/img/Frame 74.png'
import './styles.css'

function Portafolio() {
    return (
        <section className="portafolio">
            <section className="portafolioh">
                <h1>Conoce tu portafolio</h1>
                <img src={estatus} alt="" />
            </section>

            <section className="portafoliob">
                <div className="content">
                    <img src={robot} alt="" className="robot"/>
                    <div className="portafolio-text">
                        <div className="logo">
                            <img src={skadia} alt="" />
                            <img src={quince} alt="" />
                        </div>
                        <p className="mutual">FIC Old Mutual Efectivo</p>
                        <p className="dinero">$240.000</p>
                        <p className="tipo">Tipo de activo</p>
                        <p className="renta">Renta fija <br /> Depósito a la fija</p>
                        <div className="botones">
                            <img src={izquierda} alt="" />
                            <img src={derecha} alt="" />
                        </div>
                    </div>
                </div>
                <h2 className="portafolio-parrafo">Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</h2>
            </section>
        </section>
    )
}

export default Portafolio

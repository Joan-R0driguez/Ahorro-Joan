import React from 'react'
import celular from '../../assets/img/IMG1.png'
import manos from '../../assets/img/IMG3.png'
import tarjeta from '../../assets/img/IMG2.png'
import './styles.css'

function Noticias() {
    return (
        <section className="noticias">
            <section className="individual-not">
                <div className="texto-noticia">
                    <h2>10 gastos que debes evitar</h2>
                    <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                </div>
                <img src={celular} alt="" />
            </section>
            <hr />
            <section className="individual-not">
                <div className="texto-noticia">
                    <h2>10 gastos que debes evitar</h2>
                    <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                </div>
                <img src={manos} alt="" />
            </section>
            <hr />
            <section className="individual-not">
                <div className="texto-noticia">
                    <h2>10 gastos que debes evitar</h2>
                    <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                </div>
                <img src={tarjeta} alt="" />
            </section>
        </section>
    )
}

export default Noticias

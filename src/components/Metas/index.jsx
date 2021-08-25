import React from 'react'
import more from '../../assets/img/add_circle_outline_24px.png'
import playa from '../../assets/img/isla.png'
import pc from '../../assets/img/pc.png'
import rueda0 from '../../assets/img/0_donut.png'
import rueda20 from '../../assets/img/20_donut.png'
import './styles.css'

function Metas() {
    return (
        <section className="Metas">
            <section className="head">
                <h1>Tus metas</h1>
                <img src={more} alt="" />
            </section>

            <section className="dualcards">
                <div className="card">
                    <div className="meta">
                        <img src={playa} alt="" />
                        <h1>Viaje a las Islas Canarias</h1>
                    </div>
                    <div className="porcentaje">
                        <img src={rueda20} alt="" />
                        <div className="dinero">
                            <h3>$1.630.000</h3>
                            <h4>$8.000.000</h4>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="meta">
                        <img src={pc} alt="" />
                        <h1>Macbook Pro</h1>
                    </div>
                    <div className="porcentaje">
                        <img src={rueda0} alt="" />
                            <div className="dinero">
                                <h3>$0</h3>
                                <h4>$7.000.000</h4>
                            </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Metas;
import React from 'react'
import notificacion from '../../assets/img/notifications_24px.png'
import './styles.css'

function Header() {
    return (
        <header>
            <h1>Hola, Camila</h1>
            <img src={notificacion} alt="" />
        </header>
    )
}

export default Header;
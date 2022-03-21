import React from 'react'
import { CloseButton } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <section className='header'>
            <h3 className='header-title'>Оформление подписки</h3>
            <CloseButton className='header-close'/>
        </section>
    )
}

export default Header

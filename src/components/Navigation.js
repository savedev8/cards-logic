import React from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navigation.scss'

function Navigation() {
    return (
        <section className='plan-navigation'>
            <Button as={Link} to='subscribe' className='modal__button'>Продолжить</Button>

            <div className='plan-progress'>
                <div className='plan-progress__title'>
                    Шаг 1/3
                    <span>Оплата</span>
                </div>
                    <ProgressBar animated variant="primary" now={30} />
            </div>
        </section>
    )
}

export default Navigation

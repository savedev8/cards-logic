import React from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import './Navigation.scss'

function Navigation() {
    return (
        <section className='plan-navigation'>
            <div className='nav__button'>
                <Link as={Button} to='subscribe' className='btn btn-primary'>Продолжить</Link>
            </div>

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

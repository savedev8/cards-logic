import React from 'react'
import { Button } from 'react-bootstrap'
// import './Navigation.scss'

function Navigation() {
    return (
        <section className='plan-navigation'>
            <div className='nav__button'>
                <Button variant='primary'>Продолжить</Button>
            </div>

            <div className='plan-progress'>
                <div className='plan-progress__title'>
                    Шаг 1/3
                    <span>Оплата</span>
                </div>
                <div className='plan-line'>
                    <progress max='100' value='33'></progress>
                </div>
            </div>
        </section>
    )
}

export default Navigation

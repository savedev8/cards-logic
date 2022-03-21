import React from 'react'
import './Requests.scss'

const Requests = () => {
    return (
        <section className='request'>
            <h3 className='request-title'>Ваш запрос</h3>
            <section className='request-info'>
                <div className='request-info__items'>
                    <div className='request-info__item'>
                        План «Стандарт+» <span>$2475.00</span>
                        <p>15 слотов</p>
                    </div>

                    <p className='request-price'>
                        Итого:<span>$2475.00</span>
                    </p>
                </div>
            </section>

            <div className='request-balance'>
                <p className='request-score'>
                    Ваш баланс:
                    <span>$2475.00</span>
                </p>
                <div className='request-button'>
                    <a href='#header'>Запросить</a>
                </div>
            </div>
        </section>
    )
}

export default Requests; 

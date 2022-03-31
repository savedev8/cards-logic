import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Request.scss'

const RequestSub = () => {
    return (
        <section className='request'>
            <h3 className='modal__title'>Ваш запрос</h3>
            <section className='request-info'>
                <div className='request-info__items'>
                    <div className='request-info__item'>
                        План «Стандарт+» <span>$2475.00</span>
                        <p>15 слотов</p>
                    </div>

                    <div className='request-info__item'>
                        Срок подписки<span>x3</span>
                        <p>3 месяца</p>
                    </div>

                    <div className='request-info__item'>
                        Скидка <span className='blue'>-20%</span>
                        <p>на подписку</p>
                    </div>

                    <p className='request-price'>
                        Итого:<span>$5940.00</span>
                    </p>
                </div>
            </section>

            <div className='request-balance'>
                <p className='request-score'>
                    Ваш баланс:
                    <span>$5940.00</span>
                </p>
                <Button as={Link} to='#header' className='modal__button'>Запросить</Button>
            </div>
        </section>
    )
}

export default RequestSub

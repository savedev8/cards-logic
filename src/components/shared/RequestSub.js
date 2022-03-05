import React from 'react'
// import './Request.scss'

const RequestSub = () => {
    return (
        <section className='request'>
            <h3 className='request-title'>Ваш запрос</h3>
            <section className='request-info'>
                <div class='request-info__items'>
                    <div class='request-info__item'>
                        План «Стандарт+» <span>$2475.00</span>
                        <p>15 слотов</p>
                    </div>

                    <div class='request-info__item'>
                        Срок подписки<span>x3</span>
                        <p>3 месяца</p>
                    </div>

                    <div class='request-info__item'>
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
                <div className='request-button'>
                    <a href='#header'>Запросить</a>
                </div>
            </div>
        </section>
    )
}

export default RequestSub

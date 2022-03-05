import React from 'react'
// import './Req.scss'

const Req = () => {
    return (
        <section className='request'>
            <h3 className='request-title'>Ваш запрос</h3>
            <section className='request-info'>
                <div class='request-info__items'>
                    <div class='request-info__item'>
                        План не выбран <span>$0.00</span>
                        <p>15 слотов</p>
                    </div>

                    <p className='request-price'>
                        Итого:<span>$0.00</span>
                    </p>
                </div>
            </section>

            <div className='request-balance'>
                <p className='request-score'>
                    Ваш баланс:
                    <span>$750.00</span>
                </p>
                <div className='request-button'>
                    <a href='#header'>Запросить</a>
                </div>
            </div>
        </section>
    )
}

export default Req 

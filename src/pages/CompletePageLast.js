import React from 'react'
// import './Complete.scss'

const CompletePageLast = () => {
    return (
        <section className='complete'>
            <h1 className='complete-title'>Готово!</h1>
            <section className='complete-info'>
                Подписка на аккаунты успешно оформлена Начните запрашивать
                аккаунты из раздела «Подписка»
            </section>

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
                        Итого:<span>$1015.00</span>
                    </p>
                </div>
            </section>

            <div className='complete-button'>
                <a href='/'>Перейти к запросу</a>
            </div>
        </section>
    )
}

export default CompletePageLast

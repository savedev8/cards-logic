import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Complete.scss';

const CompletePageLast = () => {
    return (
        <section className='complete'>
            <h1 className='complete-title'>Готово!</h1>
            <section className='complete-info'>
                Подписка на аккаунты успешно оформлена Начните запрашивать
                аккаунты из раздела «Подписка»
            </section>

            <section className='request__info'>
                    <div className='request__info-item'>
                        План «Стандарт+» <span>$2475.00</span>
                        <p>15 слотов</p>
                    </div>

                    <div className='request__info-item'>
                        Срок подписки<span>x3</span>
                        <p>3 месяца</p>
                    </div>

                    <div className='request__info-item'>
                        Скидка <span className='blue'>-20%</span>
                        <p>на подписку</p>
                    </div>
                    <p className='request-price'>
                        Итого:<span>$1015.00</span>
                    </p>
                <Button as={Link} to='/' className='modal__button'>Перейти к запросу</Button>
            </section>


        </section>
    );
};

export default CompletePageLast;

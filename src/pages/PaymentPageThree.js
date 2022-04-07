import React from 'react';
import { Button } from 'react-bootstrap';
import './Payment.scss';

const PaymentPageThree = () => {
    return (
        <>
            <section className='payment-inner'>
                <h3 className='modal__title'>Пополнение</h3>
                <p className='payment-info'>Введите сумму</p>
                <input
                    className='payment-input'
                    placeholder='5190'
                    type='text'
                />
                <p className='payment-info'>Способ пополнения</p>

                <div className='payment-buttons'>
                    <div className='payment-circle'>
                        <input type='radio' id='card' name='card' />
                        <img src='./img/card.svg' alt='card' />
                        <label for='card'>
                            <span></span>Кредитной картой
                        </label>
                    </div>

                    <div className='payment-circle'>
                        <input
                            className='payment-circle'
                            type='radio'
                            id='yandex'
                            name='yandex'
                        />
                        <img src='./img/yandex.svg' alt='yandex' />
                        <label for='yandex'>
                            <span></span>Webmoney
                        </label>
                    </div>

                    <div className='payment-circle'>
                        <Button type='radio' id='qiwi' name='qiwi' />
                        {/* <img src='./img/qiwi.svg' alt='qiwi' /> */}
                        <label for='qiwi'>
                            <span></span>Яндекс.Деньги
                        </label>
                    </div>

                    <div className='payment-circle'>
                        <input type='radio' id='webmoney' name='webmoney' />
                        <img src='./img/webmoney.svg' alt='webmoney' />
                        <label for='webmoney'>
                            <span></span>Bitcoin
                        </label>
                    </div>

                    <div className='payment-circle'>
                        <input type='radio' id='bitcoin' name='bitcoin' />
                        <img src='./img/bitcoin.svg' alt='bitcoin' />
                        <label for='bitcoin'>
                            <span></span>QIWI кошелек
                        </label>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentPageThree;

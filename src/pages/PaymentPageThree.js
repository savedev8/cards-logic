import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Payment.scss'
import { ModalContainer } from './PlanPageOne'

const PaymentPageThree = () => {
    return (
        <>
            <ModalContainer>
                <section className='payment-inner'>
                    <h3 className='payment-title'>Пополнение</h3>
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
                    <section className='payment-navigation'>

                    <Button as={Link} to='/finished' className='modal__button'>Продолжить</Button>


                        <div className='payment-return'>
                            <Link to='/subscribe'>Вернуться назад</Link>
                        </div>
                        
                        <div className='payment-progress'>
                            <div className='payment-progress__title'>
                                Шаг 2/3
                                <span>Оплата</span>
                            </div>
                            <div className='payment-line'>
                                <progress max='100' value='66'></progress>
                            </div>
                        </div>
                    </section>
                </section>
            </ModalContainer>
        </>
    )
}

export default PaymentPageThree

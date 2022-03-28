import React from 'react'
import { Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { ModalContainer } from './PlanPageOne'
import './Subscribe.scss'

const SubscribePageTwo = () => {
    return (
        <ModalContainer>
            <section className='subscribe-inner'>
                <h3 className='plan-title'>Срок подачи</h3>
                <Form.Select className='subscribe-menu'>
                    <option>1 месяц - 2475$</option>
                    <option>2 месяца - 4455$<span>-10%</span></option>
                    <option>3 месяца - 5940$<span>-20%</span></option>
                    <option>4 месяца - 6930$<span>-30%</span></option>
                </Form.Select>
                {/* <section className='subscribe-data'>
                    <input placeholder='1 месяц' type='text' />
                    <img src='img/arrow-up.svg' alt='arrow-up' />
                </section> */}

                {/* <section className='subscribe-menu'>
                    <div>1 месяц - 2475$</div>
                    <div>
                        2 месяца - 4455$<span>-10%</span>
                    </div>
                    <div>
                        3 месяца - 5940$<span>-20%</span>
                    </div>
                    <div>
                        4 месяца - 6930$<span>-30%</span>
                    </div>
                </section>  */}

                {/* <section className='subscribe-navigation'>
                    <div className='subscribe-button'>
                        <Link to='/payment'>Продолжить</Link>
                    </div>
                    <div className='subscribe-return'>
                        <Link to='/'>Вернуться назад</Link>
                    </div>
                    <div className='subscribe-progress'>
                        <div className='subscribe-progress__title'>
                            Шаг 2/3
                            <span>Оплата</span>
                        </div>
                        <div className='subscribe-line'>
                            <progress max='100' value='33'></progress>
                        </div>
                    </div>
                </section> */}
                <div className='subscribe-button'>
                        <Link to='/payment'>Продолжить</Link>
                    </div>
            </section>
        </ModalContainer>
    )
}

export default SubscribePageTwo

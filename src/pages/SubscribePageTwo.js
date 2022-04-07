import React from 'react';
import { Form } from 'react-bootstrap';
import './Subscribe.scss';

const SubscribePageTwo = () => {
    return (
        <section className='subscribe-inner'>
            <h3 className='modal__title'>Срок подачи</h3>
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
        </section>
    );
};

export default SubscribePageTwo;

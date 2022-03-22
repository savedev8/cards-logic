import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Req.scss'

const Req = () => {
    const [ req, setReq ] = useState({a: 'План не выбран', b: '$0', c: '0 слотов', d: '$0.00', e: '$750.00'});
    console.log(req);
    const { dataSet } = useSelector((state) => state.dataInfo)
    return (
        <section className='request'>
            <h3 className='plan-title'>Ваш запрос</h3>
            <section className='request-info'>
            {/* {req.map(item => ( */}
                <div class='request-info__items'>
                    <div class='request-info__item'>
                        {req.a} <span>{req.b}</span>
                        <p>{req.c}</p>
                    </div>

                    <p className='request-price'>
                        Итого:<span>{req.d}</span>
                    </p>
            </div>
            {/* ))} */}
                </section>
            <div className='request-balance'>
                <p className='request-score'>
                    Ваш баланс:
                    <span>{req.e}</span>
                </p>
                <div className='request-button'>
                    <a href='#header'>Запросить</a>
                </div>
            </div>
        </section>
    )
}

export default Req 

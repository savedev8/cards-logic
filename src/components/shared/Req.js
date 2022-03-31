import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Req.scss'

const Req = () => {
    const [balance] = useState(750.00);
    const {id, dataSet} = useSelector((state) => state.dataInfo);
    console.log(id);
    const [ req, setReq ] = useState({id: null, name: 'План не выбран', itemCost: '$0', minItems: '0 слотов', cost: '$0.00', e: '$750.00'});
    console.log(req);

    useEffect(() => {
        dataSet.map((item) => item.id === id ? setReq(item) : req);
    });

    return (
        <section className='request'>
            <h3 className='modal__title'>Ваш запрос</h3>
            <section className='request-info'>
                <div className='request-info__items'>
                    <div className='request-info__item'>
                        {req.name} <span>{req.itemCost}</span>
                        <p>{req.minItems} слотов</p>
                    </div>

                    <p className='request-price'>
                        Итого:<span>{req.cost}</span>
                    </p>
            </div>
                </section>
            <div className='request-balance'>
                <div className='d-flex'>
                <p className='request-score'>
                    Ваш баланс:
                    <span>${balance}</span>
                </p>

                <Button as={Link} to='#header' className='modal__button'>Запросить</Button>
                </div>
            </div>
        </section>
    )
}

export default Req 

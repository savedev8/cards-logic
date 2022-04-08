import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Req.scss';

const Req = () => {
    const [balance] = useState(750.00);
    const { id, dataSet } = useSelector((state) => state.dataInfo);
    console.log(id);
    const [req, setReq] = useState({
        id: null,
        name: 'План не выбран',
        itemCost: '$0',
        minItems: '0 слотов',
        term: '',
        termX: null,
        termCount: null,
        discount: '',
        discountX: null,
        discountCount: '',
        e: '$750.00',
        cost: '$0.00',
    });
    console.log(req);

    useEffect(() => {
        dataSet.map((item) => item.id === id ? setReq(item) : req);
    });

    return (
        <section className='request'>
            <h3 className='modal__title'>Ваш запрос</h3>
            <section className='request__inner'>
            <section className='request__info'>
                <div className='request__info-item'>
                    {req.name} <span>{req.itemCost}</span>
                    <p>{req.minItems}</p>
                </div>

                <div className='request__info-item'>
                    {/* Срок подписки */}
                    {req.term}<span>
                        {/* x3 */}
                        {req.termX}</span>
                    <p>
                        {req.termCount}{/* 3 месяца */}
                    </p>
                </div>

                <div className='request__info-item'>
                    {/* Скидка  */}{req.discount}
                    <span className='blue'>
                        {/* -20% */}
                        {req.discountX}
                    </span>
                    <p>
                        {/* на подписку */}
                        {req.discountCount}
                    </p>
                </div>

            </section>
            <section>
                <p className='request-price'>
                    Итого:<span>{req.cost}</span>
                </p>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='request-score '>
                        Ваш баланс:
                        <span className="">${balance}</span>
                    </p>

                    <Button as={Link} to='#header' className='modal__button'>Запросить</Button>
                </div>
            </section>
            </section>
        </section>
    );
};

export default Req;

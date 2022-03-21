import React from 'react'
import { useSelector } from 'react-redux';
import './Req.scss'

const Req = () => {
    const { dataSet } = useSelector((state) => state.dataInfo);
    return (
        <section className='request'>
            <h3 className='plan-title'>Ваш запрос</h3>
            <section className='request-info'>
            {dataSet.map(item => (
                <div class='request-info__items'>
                    <div class='request-info__item'>
                        План не выбран <span>{item.cost}</span>
                        <p>0 слотов</p>
                    </div>

                    <p className='request-price'>
                        Итого:<span>$0.00</span>
                    </p>
            </div>
            ))}
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

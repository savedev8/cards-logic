import React, { useState } from 'react'
import data from '../data/data.json'

export function Counter({ activeId }) {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (
        <section className='plan-slots'>
            <h3 className='plan-slots__title'>Количество слотов</h3>
            {data.map((item) => (
                <div
                    id='counter'
                    className='plan-number'
                    data-step='1'
                    data-min='1'
                    data-max='100'>
                    <div className='plan-number__text'>
                        {count}
                        {item.id === activeId
                            ? setCount(Number(item.minItems))
                            : ''}
                    </div>
                    <div className='plan-number__controls'>
                        <button
                            className='plan-number__plus'
                            onClick={handleIncrement}>
                            +
                        </button>
                        <button
                            className='plan-number__minus'
                            onClick={(e) => {
                                handleDecrement()
                            }}>
                            -
                        </button>
                    </div>
                    <p
                        className={
                            activeId === item.id && count < item.minItems
                                ? 'plan-text'
                                : 'plan-none'
                        }>
                        Для оформления выбранного плана необходимо более {count}{' '}
                        слотов
                    </p>
                </div>
            ))}
        </section>
    )
}

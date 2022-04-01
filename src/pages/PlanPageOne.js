import React, { useEffect, useState } from 'react'
import './Plan.scss'

import styled from 'styled-components'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData, refreshActive } from '../store/slices/dataSlice';
import Navigation from './../components/Navigation';

export const ModalContainer = styled.div`
    width: 630px;
    height: 416px;
    border-right: 1px solid #ebecff;
`

const PlanPageOne = () => {
    const [activeId, setActiveId] = useState()
    const dispatch = useDispatch();
    const { dataSet } = useSelector((state) => state.dataInfo);
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const [text, setText] = useState('d-none');
    const [border, setBorder] = useState('counter__number');
    const [able, setAble] = useState(false);
    
    useEffect(() => {
        dataSet.map((item) => {
            return activeId !== item.id && count <= item.minItems
                ? setAble(true) && setText('counter__alert') && setBorder('counter__number red')
                : setAble(false) && setText('d-none') && setBorder('counter__number')
        })
    })

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch])

    return (
        <ModalContainer className='d-flex'>
            <Container className='plan-inner'>
                <h3 className='modal__title'>План подписки</h3>

                <CardGroup className='card-items'>
                    {dataSet.map((item) => (
                        <Card
                            key={item.id}
                            className={`${
                                activeId === item.id ? 'card active' : 'card'
                            }`}
                            onClick={(e) => {
                                setActiveId(item.id)
                                dispatch(refreshActive(item.id));
                                setCount(Number(item.minItems))
                            }}>
                            <Card.Title
                                className={`card-title
                                    ${activeId === item.id
                                        ? 'actives'
                                        : null}`
                                }>
                                {item.name}
                            </Card.Title>
                            <Card.Text className='card-info'>
                                <span>от {item.minItems} слотов</span>
                                <span>{item.countries}</span>
                                <span>{item.itemCost} за слот</span>
                            </Card.Text>

                            <Card.Subtitle
                                className={
                                    activeId === item.id
                                        ? 'card-price actives'
                                        : 'card-price'
                                }>
                                {item.cost}
                                <span> / месяц</span>
                            </Card.Subtitle>
                            <Card.Link to='/'>Подробнее</Card.Link>
                        </Card>
                    ))}
                </CardGroup>

                <section className='counter'>
                    <h3 className='modal__title'>Количество слотов</h3>
                    <div className='counter__in'>
                        <div className={`${border}`} 
                        // style={{ border: `1px solid ${border}`}}
                        >
                            <div className='counter__text'>{count}</div>
                            {dataSet.map((item, id) => (
                                <div className='counter__buttons'>
                                    <Button
                                        className='plus'
                                        variant=''
                                        onClick={handleIncrement}>
                                        +
                                    </Button>
                                    <Button
                                        className='minus'
                                        variant=''
                                        disabled={able}
                                        onClick={(e) => {
                                            handleDecrement()
                                            activeId 
                                             &&
                                            count < item.minItems
                                                ? setText('counter__alert')
                                                : setText('d-none')
                                        }}>
                                        -
                                    </Button>
                                </div>
                            ))}
                        </div>
                        {/* {dataSet.map((item) => */}
                           {/*   activeId === item.id ? (*/}
                                <div className={`${text}`}>
                                    Для оформления выбранного плана необходимо
                                    более 10 слотов
                                </div>
                            {/* ) : null */}
                        {/* )} */}
                    </div>
                </section>
            <Navigation />
            </Container>
        </ModalContainer>
    )
};

export default PlanPageOne;

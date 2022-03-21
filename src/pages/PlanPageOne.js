import React, { useEffect, useState } from 'react'
import './Plan.scss'
// import './Counter.scss'

// import data from '../data/data.json'
import styled from 'styled-components'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../store/slices/dataSlice';

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
    console.log(dataSet);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const [text, setText] = useState('plan-none')
    const [able, setAble] = useState(false)
    
    // useEffect(() => {
    //     data.map((item) => {
    //         return activeId !== item.id && count <= item.minItems
    //             ? setAble(true) && setText('plan-text')
    //             : setAble(false) && setText('d-none')
    //     })
    // })

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch])

    return (
        <ModalContainer>
            <Container className='plan-inner'>
                <h3 className='plan-title'>План подписки</h3>

                <CardGroup className='card-items'>
                    {dataSet.map((item) => (
                        <Card
                            key={item.id}
                            className={`${
                                activeId === item.id ? 'card active' : 'card'
                            }`}
                            onClick={(e) => {
                                setActiveId(item.id)
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

                <section className='plan-slots'>
                    <h3 className='plan-title'>Количество слотов</h3>
                    <div className='plan-in'>
                        <div className='plan-number'>
                            <div className='plan-number__text'>{count}</div>
                            {/* {data.map((item, id) => ( */}
                                <div className='plan-number__controls'>
                                    <Button
                                        className='plan-number__plus'
                                        onClick={handleIncrement}>
                                        +
                                    </Button>
                                    <Button
                                        className='plan-number__minus'
                                        disabled={able}
                                        onClick={(e) => {
                                            handleDecrement()
                                            activeId 
                                            //  &&
                                            // count < item.minItems
                                                ? setText('plan-text')
                                                : setText('plan-none')
                                        }}>
                                        -
                                    </Button>
                                </div>
                            {/* ))} */}
                        </div>
                        {/* {data.map((item) =>
                            activeId === item.id ? (
                                <div className={`${text}`}>
                                    Для оформления выбранного плана необходимо
                                    более {item.minItems} слотов
                                </div>
                            ) : null
                        )} */}
                    </div>
                </section>
                <Navigation />
            </Container>
        </ModalContainer>
    )
};

export default PlanPageOne;

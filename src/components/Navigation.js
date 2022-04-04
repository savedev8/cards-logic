import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';
import '../pages/Plan.scss';
import { APPS_CONFIG } from '../apps';

function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentGlobalPath = Object.keys(APPS_CONFIG).find((i) =>
        currentPath.includes(i)
    );

    const p = APPS_CONFIG[currentGlobalPath];
    const panelItems = Object.entries(APPS_CONFIG);
    console.log(p);
    return (
        <>
        <section className='plan-navigation'>
            {/* {p.map((i) => ( */}
                <div key={p.id}><Button as={Link} to={p.next} className='modal__button'>Продолжить</Button>

                    <Button as={Link} to={p.prev} className={`modal__return 
                    ${currentPath === '/' ? 'd-none' : null}`} variant='' >Вернуться назад</Button>

                    <div className='plan-progress'>
                        <div className='plan-progress__title'>
                            Шаг {p.step}
                            <span>Оплата</span>
                        </div>
                        <ProgressBar animated variant="primary" now={p.progress} />
                    </div></div>
            {/* ))} */}
            </section>
            </>
    );
}

export default Navigation;

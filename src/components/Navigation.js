import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';
import '../pages/Plan.scss';
import { path } from '../apps';

function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {path.map((i) => i.name === currentPath ?
                <div className="navigation" key={i.name}>
                    <div className='d-flex'>
                        <Button as={Link} to={i.next} className='modal__button'>Продолжить</Button>

                        <Button as={Link} to={i.prev} className={`modal__return 
                ${currentPath === '/' ? 'd-none' : null}`} variant=''>Вернуться назад</Button>
                    </div>
                    <div className='navigation__progress'>
                        <div className='navigation__progress-title'>
                            Шаг {i.step}
                            <span>Оплата</span>
                        </div>
                        <ProgressBar className="navigation__line" variant="primary" now={i.progress} />
                    </div>
                </div>
                : null)
            }
        </>
    );
}

export default Navigation;

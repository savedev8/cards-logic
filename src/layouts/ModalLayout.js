import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Header from '../components/shared/Header'
import Req from '../components/shared/Req';

const ModalLayout = () => {
    const location = useLocation();
    return (
        <div className='modal__open'>
            <Header />
            <div className='d-flex'>
                <div className='flex-direction-column'>
                <Outlet />
                <Navigation />
                </div>
                {location.pathname.includes('/finished') ? null : <Req />}
            </div>
        </div>
    )
};

export default ModalLayout;


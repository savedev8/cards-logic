import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header'
import Req from '../components/shared/Req';
import Navigation from './../components/Navigation';

const ModalLayout = () => {
    return (
        <div className='modal__open'>
            <Header />
            <div className='d-flex'>
                <div>
                <Outlet />
                <Navigation />
                </div>
                <Req />
            </div>
        </div>
    )
};

export default ModalLayout;


import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header'
import Req from '../components/shared/Req';

const ModalLayout = () => {
    return (
        <div className='modal__open'>
            <Header />
            <div className='d-flex'>
                <Outlet />
                <Req />
                </div>
        </div>
    )
};

export default ModalLayout;


import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header'
import Req from '../components/shared/Req';
import RequestSub from '../components/shared/RequestSub';

const ModalLayout = () => {
    return (
        <div className='modal__open'>
            <Header />
            <div className='d-flex'>
                <Outlet />
                <RequestSub />
            </div>
        </div>
    )
};

export default ModalLayout;


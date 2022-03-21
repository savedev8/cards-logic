import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header'
import  Sidebar from '../components/shared/Sidebar'

const ModalLayout = () => (
        <div className='modal__open'>
        <Header />
        <div className='d-flex'>
            <Outlet />
            <Sidebar />
        </div>
        </div>
);

export default ModalLayout;


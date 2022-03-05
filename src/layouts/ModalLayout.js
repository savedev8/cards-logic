import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header'
import  Sidebar from '../components/shared/Sidebar'

const ModalLayout = () => (
    <>
        <Header />
        <div className='d-flex justify-content-center'>
            <Outlet />
            <Sidebar />
        </div>
    </>
);

export default ModalLayout;


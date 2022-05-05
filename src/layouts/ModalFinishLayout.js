import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

export const ModalFininshLayout = () => {
    return (
        <div className='modal__open'>
            <Header />
            <Outlet />
        </div>
    );
};


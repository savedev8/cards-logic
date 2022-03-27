import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header'
import Req from '../components/shared/Req';
import  Sidebar from '../components/shared/Sidebar'

const ModalLayout = () => {
    return (
        <div className='modal__open'>
            <Header />
            <div className='d-flex'>
                <Outlet />
            </div>
        </div>
    )
};

export default ModalLayout;


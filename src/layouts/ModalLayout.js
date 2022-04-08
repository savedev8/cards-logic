import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Header from '../components/shared/Header';
import Req from '../components/shared/Req';

import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 630px;
    height: 416px;
    border-right: 1px solid #ebecff;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`;

const ModalLayout = () => {
    const location = useLocation();
    return (
        <div className='modal__open'>
            <Header />
            <div className='d-flex justify-content-around'>
                <ModalContainer>
                        <Outlet />
                        <Navigation />
                </ModalContainer>
                {location.pathname.includes('/finished') ? null : <Req />}
            </div>
        </div>
    );
};

export default ModalLayout;


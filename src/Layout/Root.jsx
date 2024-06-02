import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const Root = () => {
    return (
        <div className='mx-20 mt-5'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
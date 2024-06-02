import React from 'react';
import Header from '../../shared/Navbar/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftSideNav from '../../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';
import BreakingNews from '../BreakingNews/BreakingNews';

const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews></BreakingNews>
            <Navbar />

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav />
                </div>
                <div className='col-span-2 border'>
                    <h2 className='text-4xl'>News coming soon</h2>
                </div>
                <div className='border'>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;

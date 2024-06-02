import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import swmming from '../../assets/qZone1.png'
import classes from '../../assets/qZone2.png'
import play from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Login with</h2>
            <div className='p-2'>
                <button className='btn flex mt-4 py-2 text-center items-center border w-full justify-center gap-2'>
                    <FaGoogle />
                    <p> Login with Google</p>
                </button>
                <button className='btn flex mt-2 py-2 text-center items-center border-5px w-full justify-center gap-2'>
                    <FaGithub />
                    <p> Login with Github</p>
                </button>
            </div>
            <div className='mt-7'>
                <h2 className='text-2xl font-semibold mb-4'>Find Us On</h2>
                <div className='px-2'>
                    <button className='flex  text-center items-center border w-full justify-center gap-2 py-2 rounded-t-lg'>
                        <FaFacebook />
                        Facebook
                    </button>
                    <button className='flex  text-center items-center border w-full justify-center gap-2 py-2'>
                        <FaTwitter />
                        Twiter
                    </button>
                    <button className='flex text-center items-center border w-full justify-center gap-2 py-2 rounded-b-lg'>
                        <FaInstagram />
                        Instagram
                    </button>
                </div>
                <div className='bg-slate-200 mt-7'>
                    <h2 className='text-2xl font-semibold'>Q-Zone</h2>
                    <div className='mt-7'>
                        <img src={swmming} alt="" />
                    </div>
                    <div className='mt-7'>
                        <img src={classes} alt="" />
                    </div>
                    <div className='mt-7'>
                        <img src={play} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;
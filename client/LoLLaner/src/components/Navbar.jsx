import React from 'react';
import LoLLogo from '../assets/LoLLogo.png'
import BackArrow from '../assets/BackArrow.png'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div className='flex items-center justify-between w-screen mt-[15px]'>
            <Link to='/'>
            <div className=''>
                <img src={LoLLogo} alt="LoL Logo" className='h-[80px] ml-[20px] shadow-primaryWhite hover:shadow-2xl bg-primaryWhite bg-opacity-0 hover:bg-opacity-5 rounded-xl transition-all duration-200'/>
            </div>
            </Link>
            <div className='flex-1 w-[75%] text-center absolute mx-[15%]'>
                <h1 className='text-[54px] font-bold tracking-widest'>AI Laning Guide</h1>    
            </div>
            <Link className='' to='/'>
                <img src={BackArrow} alt="Back Arrow" className='h-[75px] mr-[50px] bg-primaryWhite rounded-3xl hover:bg-opacity-30 transition-all duration-200 cursor-pointer'/>
            </Link>
        </div>
    );
}

export default Navbar;
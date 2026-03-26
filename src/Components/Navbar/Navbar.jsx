import React from 'react';
import dollarImg from '../../assets/dollar 1.png'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="border border-[#1313131a] font-bold flex justify-center items-center gap-2 px-4 py-2 rounded-lg">
                        <span>0 Coin</span>
                      <img src={dollarImg} alt="" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
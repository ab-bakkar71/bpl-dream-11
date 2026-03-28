import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosFlag } from 'react-icons/io';

const Card = ({ player, setCoin, coin, setSelectedPlayer, selectedPlayers }) => {

    const { playerName, playerCountry, playerType, rating, battingStyle, BollingStyle, Price, playerImage } = player

    const [isSelected, setIsSelected] = useState(false);
    const handleChoosePlayer = () => {
        let newCoin = coin - Price;
        if (newCoin >= 0) {
            setCoin(coin - Price);
        }
        else {
            alert("Not enough to buy this Player")
            return;
        }
        alert(`${playerName} is Selected`)
        setIsSelected(true);
        setSelectedPlayer([...selectedPlayers, player])
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="w-full h-80"
                        src={playerImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* card title */}
                    <h2 className="card-title"> <FaUser />{playerName}</h2>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <IoIosFlag />
                            <p>{playerCountry}</p>
                        </div>
                        <span className='bg-[#1313130D] px-3 py-2 rounded-sm'>{playerType}</span>
                    </div>
                    <div className="divider"></div>
                    <div className='space-y-2'>
                        <div className='flex justify-between'>
                            <div className='font-bold'>Rating</div>
                            <span>{rating}</span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-bold'>Bating Style</div>
                            <span>{battingStyle}</span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-bold'>Bolling Style</div>
                            <span>{BollingStyle}</span>
                        </div>
                    </div>

                    <div className="card-actions justify-between items-center mt-2">
                        <h1 className='font-bold'>Price:${Price}  </h1>

                        <button onClick={handleChoosePlayer}
                            disabled={isSelected ? true : false}
                            className="btn btn-outline">
                            {isSelected ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import Card from '../../ui/card';

const AvailablePlayers = ({ playersData, setCoin, coin }) => {
    

    
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
                    {
                    playersData.map((player, index)=> <Card key={index} player={player} setCoin={setCoin} coin={coin}></Card>)
                }
                </div>
        </div>
    );
};

export default AvailablePlayers;
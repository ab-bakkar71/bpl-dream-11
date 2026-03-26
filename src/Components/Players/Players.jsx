import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {

    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div>
             <div className='container mx-auto'> 
                <AvailablePlayers playersData={playersData}></AvailablePlayers>

             </div>
        </div>
    );
};

export default Players;
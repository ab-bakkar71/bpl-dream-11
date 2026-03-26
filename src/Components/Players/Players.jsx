import React, { use } from 'react';

const Players = ({ playersPromise }) => {

    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div>
             <div>
                <h3>Available Players</h3>

             </div>
        </div>
    );
};

export default Players;
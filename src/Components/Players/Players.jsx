import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {

    const playersData = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayer] = useState([]);

    return (
        <div>
            <div className='container mx-auto'>

                <div className='flex justify-between items-center mb-6'>
                    {selectedType === "available" ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Player ({selectedPlayers.length}/{playersData.length})</h2>}

                    <div>
                        <button onClick={() => setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-transparent"} rounded-r-none border-r-0`}>Available</button>
                        <button onClick={() => setSelectedType("selected")} className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-transparent"} rounded-l-none border-l-0`}>Selected ({selectedPlayers.length})</button>
                    </div>
                </div>
                {selectedType === "available" ? <AvailablePlayers 
                playersData={playersData}
                setCoin={setCoin} 
                coin={coin} 
                setSelectedPlayer={setSelectedPlayer} 
                selectedPlayers={selectedPlayers} ></AvailablePlayers> :
                    <SelectedPlayers selectedPlayers={selectedPlayers} ></SelectedPlayers>}

            </div>
        </div>
    );
};

export default Players;
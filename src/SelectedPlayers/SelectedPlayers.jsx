import { MdDeleteOutline } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(selectedPlayers);

    return (
        <div>
            {
                selectedPlayers.map((selectedPlayer) =>
                    <div className="flex items-center justify-between gap-4 p-4 mb-6 bg-white border border-gray-200 rounded-xl shadow-sm">

                        
                        <div className="flex items-center gap-4">
                            <img
                                className="w-16 h-16 rounded-lg object-cover bg-gray-200"
                                src={selectedPlayer.playerImage}
                                alt="player"
                            />

                            <div>
                                <h1 className="text-lg font-semibold text-gray-800">
                                    {selectedPlayer.playerName}
                                </h1>
                                <p className="text-sm text-gray-500">
                                    {selectedPlayer.battingStyle}
                                </p>
                            </div>
                        </div>

                        
                        <button className="p-2 text-red-500 rounded-lg hover:bg-red-50 transition cursor-pointer">
                            <MdDeleteOutline size={22} />
                        </button>
                    </div>
                )}
        </div>
    );
};

export default SelectedPlayers;
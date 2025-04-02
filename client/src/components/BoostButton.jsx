import { useState } from 'react';

export default function BoostButton({ playerId }) {
  const [boosted, setBoosted] = useState(false);

  const handleBoost = () => {
    setBoosted(true);
    console.log(`Player ${playerId} is now boosted!`);
    // Later: trigger Stripe or send POST to backend
  };

  return (
    <button
      onClick={handleBoost}
      disabled={boosted}
      className={`px-4 py-2 rounded text-white font-medium transition ${
        boosted ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
      }`}
    >
      {boosted ? 'Boosted ✅' : 'Boost Me 🔥'}
    </button>
  );
}

import { useState } from 'react'
import BoostButton from '../components/BoostButton'
import VideoEmbed from '../components/VideoEmbed'
import '../styles/profile.css'

export default function Profile() {
  const [isSaved, setIsSaved] = useState(false)

  const [player, setPlayer] = useState({
    id: 10,
    name: 'Chris Comba',
    position: 'Striker',
    isBoosted: false,
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHmHTxtcmQnog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731564367150?e=1749081600&v=beta&t=z0gv3ZQytShvbLYItJvpWLXb8YupaA1VD_ydoZ15A-s',
    videoUrl: 'https://www.youtube.com/embed/TAsGECik9k0',
    topQualities: ['Speed', 'Finishing', 'Leadership']
  })

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={player.imageUrl} alt={player.name} />
        <input
          type="text"
          value={player.name}
          onChange={e => setPlayer({ ...player, name: e.target.value })}
        />
        <input
          type="text"
          value={player.position}
          onChange={e => setPlayer({ ...player, position: e.target.value })}
        />
        {player.isBoosted && <p className="text-red-500">🔥 Boosted Player</p>}
        <input
          type="text"
          value={player.videoUrl}
          onChange={e => setPlayer({ ...player, videoUrl: e.target.value })}
          placeholder="YouTube video URL"
        />
      </div>

      <div className="profile-section">
        <VideoEmbed url={player.videoUrl} />
      </div>

      <div className="profile-section">
        <h2>Top Qualities</h2>
        <ul className="qualities-list">
          {player.topQualities.map((quality, idx) => (
            <li key={idx}>
              {quality}
              <button
                onClick={() =>
                  setPlayer({
                    ...player,
                    topQualities: player.topQualities.filter((_, i) => i !== idx)
                  })
                }
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a quality"
          onKeyDown={e => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              setPlayer({
                ...player,
                topQualities: [...player.topQualities, e.target.value.trim()]
              })
              e.target.value = ''
            }
          }}
        />
      </div>

      <div className="boost-section">
        <BoostButton playerId={player.id} />
      </div>

      <div className="save-section">
        <button
          onClick={() => {
            setIsSaved(true)
            setTimeout(() => setIsSaved(false), 3000)
            console.log('Saved player:', player)
          }}
        >
          Save Changes
        </button>
        {isSaved && <p>✅ Changes saved!</p>}
      </div>
    </div>
  )
}
// Updated PlayerCard.jsx for vanilla CSS styling
import VideoEmbed from './VideoEmbed';
import '../styles/playerCard.css';

export default function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h2 className="player-name">{player.name}</h2>
      <img
        src={player.imageUrl}
        alt={`${player.name}'s avatar`}
        className="player-image"
      />

      <div className="player-content">
        <p className="player-position">{player.position}</p>
        {player.isBoosted && (
          <p className="player-boosted">🔥 Boosted Player</p>
        )}

        <div className="player-video">
          <VideoEmbed url={player.videoUrl} />
        </div>

        {player.topQualities && (
          <div className="player-qualities">
            <h3>Top Qualities:</h3>
            <ul>
              {player.topQualities.map((quality, idx) => (
                <li key={idx}>{quality}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

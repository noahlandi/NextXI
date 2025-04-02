import PlayerCard from '../components/PlayerCard';
import '../styles/players.css'; 

const samplePlayers = [
    {
      id: 1,
      name: 'Chris Comba',
      position: 'Striker',
      isBoosted: true,
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHmHTxtcmQnog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731564367150?e=1749081600&v=beta&t=z0gv3ZQytShvbLYItJvpWLXb8YupaA1VD_ydoZ15A-s',
      videoUrl: 'https://www.youtube.com/embed/TAsGECik9k0',
      topQualities: ['Fast', 'Accurate Finisher', 'Strong Off the Ball']
    },
    {
      id: 2,
      name: 'Bruno Fernandes',
      position: 'Midfielder',
      isBoosted: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRbf236Xtr80bENn8AyB4UoQsziC28D131F2vao-XHiCnftf9O_9WkKgHI-g2aH4IR2_Owb0NIhsimCxSc',
      videoUrl: 'https://youtube.com/embed/I5JuitINtQU',
      topQualities: ['Vision', 'Passing Range', 'Tactical Awareness']
    },
    {
      id: 3,
      name: 'Andre Onana',
      position: 'Goalkeeper',
      isBoosted: false,
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/215340.png',
      videoUrl: 'https://www.youtube.com/embed/3vVWloM6agE',
      topQualities: ['Reflexes', 'Distribution', 'Composure']
    }
  ];
  
  export default function Players() {
    return (
      <div className="players-page">
        <h1 className="players-title">All Players</h1>
        <div className="player-grid">
          {samplePlayers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    );
  }
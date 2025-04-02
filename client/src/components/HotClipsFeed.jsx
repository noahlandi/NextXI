import PlayerCard from './PlayerCard';

const sampleHotPlayers = [
    {
      id: 1,
      name: "Chris Comba",
      position: "Striker",
      isBoosted: true,
        imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHmHTxtcmQnog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731564367150?e=1749081600&v=beta&t=z0gv3ZQytShvbLYItJvpWLXb8YupaA1VD_ydoZ15A-s",
      videoUrl: "https://www.youtube.com/embed/TAsGECik9k0",
      topQualities: ["Fast", "Accurate Finisher", "Strong Off the Ball"]
    },
  ];
  

export default function HotClipsFeed() {
    console.log("Rendering HotClipsFeed", sampleHotPlayers);
    return (
    <div>
      <h1>🔥 Hot Clips</h1>
      {sampleHotPlayers.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}


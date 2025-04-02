export default function VideoEmbed({ url }) {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={url}
          title="Player Highlight"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }
  
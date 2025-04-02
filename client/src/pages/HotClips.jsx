import HotClipsFeed from '../components/HotClipsFeed'
import '../styles/hotclips.css'

export default function HotClips() {
  return (
    <div className="hot-clips-page">
      <h1 className="hot-clips-title">Hot Clips</h1>
      <div className="hotclips-feed">
        <HotClipsFeed />
      </div>
    </div>
  )
}

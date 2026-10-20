import Icon from './Icon.jsx'

// Menampilkan foto jika `src` diisi, atau kotak placeholder jika masih kosong.
export default function ImageSlot({ src, alt = '', ratio = '4 / 3', label = 'Tempat foto', className = '' }) {
  return (
    <div className={`image-slot ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="image-slot__empty">
          <Icon name="image" size={28} />
          <span>{label}</span>
        </div>
      )}
    </div>
  )
}

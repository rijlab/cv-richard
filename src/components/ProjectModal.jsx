import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import ImageSlot from './ImageSlot.jsx'

// Mengubah link biasa (YouTube, Vimeo, Figma, Google Drive) menjadi link embed.
function toEmbedUrl(url) {
  if (!url) return ''
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  if (url.includes('figma.com') && !url.includes('/embed')) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`
  }
  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/)
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`
  return url
}

export default function ProjectModal({ project, onClose }) {
  const images = [project.cover, ...(project.gallery || [])].filter(Boolean)
  const [index, setIndex] = useState(0)
  const closeRef = useRef(null)
  const embed = toEmbedUrl(project.embed)
  const links = (project.links || []).filter((l) => l.url)

  useEffect(() => {
    document.body.classList.add('no-scroll')
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (images.length > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (images.length > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [images.length, onClose])

  const step = (d) => setIndex((i) => (i + d + images.length) % images.length)

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="icon-btn modal__close" onClick={onClose} aria-label="Tutup">
          <Icon name="close" />
        </button>

        <div className="modal__gallery">
          <div className="modal__stage">
            <ImageSlot
              src={images[index]}
              alt={`${project.title} — gambar ${index + 1}`}
              ratio="16 / 10"
              label="Tambahkan cover / gallery di profile.js"
            />
            {images.length > 1 && (
              <>
                <button className="icon-btn modal__nav modal__nav--prev" onClick={() => step(-1)} aria-label="Gambar sebelumnya">
                  <Icon name="chevronLeft" />
                </button>
                <button className="icon-btn modal__nav modal__nav--next" onClick={() => step(1)} aria-label="Gambar berikutnya">
                  <Icon name="chevronRight" />
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="modal__thumbs">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  className={`modal__thumb ${i === index ? 'is-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Lihat gambar ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal__content">
          <p className="project__meta">
            {project.category} · {project.year}
          </p>
          <h3 id="modal-title" className="modal__title">
            {project.title}
          </h3>
          <p className="modal__desc">{project.description || project.summary}</p>

          {embed && (
            <div className="modal__embed">
              <iframe
                src={embed}
                title={`Embed ${project.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}

          {project.tags?.length > 0 && (
            <ul className="chips chips--sm">
              {project.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          )}

          {links.length > 0 && (
            <div className="modal__links">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${i === 0 ? 'btn--primary' : 'btn--ghost'}`}
                >
                  {l.label} <Icon name="arrow" size={16} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import Icon from './Icon.jsx'
import ImageSlot from './ImageSlot.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  const socials = profile.socials.filter((s) => s.url)

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          {profile.available && (
            <p className="badge">
              <span className="badge__dot" />
              Terbuka untuk proyek baru
            </p>
          )}
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__cta">
            <a href="#portfolio" className="btn btn--primary">
              Lihat portfolio <Icon name="arrow" size={16} />
            </a>
            {profile.cvFile && (
              <a href={profile.cvFile} className="btn btn--ghost" download>
                Unduh CV <Icon name="download" size={16} />
              </a>
            )}
          </div>

          {socials.length > 0 && (
            <ul className="socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hero__media">
          <ImageSlot
            src={profile.photo}
            alt={`Foto ${profile.name}`}
            ratio="4 / 5"
            label="Foto profil (4:5)"
            className="hero__photo"
          />
          <div className="hero__card">
            <Icon name="pin" size={16} />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

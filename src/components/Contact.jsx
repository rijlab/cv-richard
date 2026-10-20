import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const socials = profile.socials.filter((s) => s.url)
  const tel = profile.phone?.replace(/[^\d+]/g, '')

  return (
    <section className="section contact" id="kontak">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span>05</span> Kontak
          </p>
          <h2 className="contact__title">
            Punya proyek atau lowongan? <em>Mari ngobrol.</em>
          </h2>
          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
            <Icon name="arrow" size={28} />
          </a>
        </Reveal>

        <Reveal className="contact__grid" delay={100}>
          {profile.phone && (
            <a href={`tel:${tel}`} className="contact__item">
              <Icon name="phone" />
              <span>
                <small>Telepon</small>
                {profile.phone}
              </span>
            </a>
          )}
          <div className="contact__item">
            <Icon name="pin" />
            <span>
              <small>Lokasi</small>
              {profile.location}
            </span>
          </div>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="contact__item">
              <Icon name={s.icon} />
              <span>
                <small>{s.label}</small>
                {s.url.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

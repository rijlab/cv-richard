import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { about } from '../data/profile.js'

export default function About() {
  return (
    <section className="section" id="tentang">
      <div className="container about">
        <SectionHeader index="01" eyebrow="Tentang" title={<>Sedikit tentang <em>saya</em></>} />
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80}>
              {p}
            </Reveal>
          ))}
          <Reveal as="dl" className="stats" delay={160}>
            {about.stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

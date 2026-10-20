import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <section className="section" id="keahlian">
      <div className="container">
        <SectionHeader index="03" eyebrow="Keahlian" title={<>Alat dan <em>keahlian</em></>} />
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} className="skills__card" delay={i * 60}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

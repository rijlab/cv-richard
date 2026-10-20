import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { experience, education, certifications } from '../data/profile.js'

export default function Resume() {
  return (
    <section className="section section--alt" id="resume">
      <div className="container">
        <SectionHeader index="02" eyebrow="Resume" title={<>Pengalaman &amp; <em>pendidikan</em></>} />

        <div className="resume">
          <div className="resume__col">
            <h3 className="resume__heading">Pengalaman kerja</h3>
            <ol className="timeline">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.role + job.company} className="timeline__item" delay={i * 60}>
                  <p className="timeline__period">{job.period}</p>
                  <div>
                    <h4 className="timeline__title">{job.role}</h4>
                    <p className="timeline__meta">
                      {job.company}
                      {job.location && <> · {job.location}</>}
                    </p>
                    <p className="timeline__desc">{job.description}</p>
                    {job.highlights?.length > 0 && (
                      <ul className="timeline__highlights">
                        {job.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="resume__col">
            <h3 className="resume__heading">Pendidikan</h3>
            <ol className="timeline">
              {education.map((ed, i) => (
                <Reveal as="li" key={ed.degree} className="timeline__item" delay={i * 60}>
                  <p className="timeline__period">{ed.period}</p>
                  <div>
                    <h4 className="timeline__title">{ed.degree}</h4>
                    <p className="timeline__meta">{ed.school}</p>
                    {ed.description && <p className="timeline__desc">{ed.description}</p>}
                  </div>
                </Reveal>
              ))}
            </ol>

            {certifications.length > 0 && (
              <>
                <h3 className="resume__heading resume__heading--spaced">Sertifikasi</h3>
                <ul className="certs">
                  {certifications.map((c) => {
                    const content = (
                      <>
                        <Icon name="award" size={20} />
                        <span className="certs__text">
                          <strong>{c.title}</strong>
                          <small>
                            {c.issuer} · {c.year}
                          </small>
                        </span>
                        {c.url && <Icon name="arrow" size={16} className="certs__arrow" />}
                      </>
                    )
                    return (
                      <Reveal as="li" key={c.title}>
                        {c.url ? (
                          <a href={c.url} target="_blank" rel="noreferrer" className="certs__item">
                            {content}
                          </a>
                        ) : (
                          <div className="certs__item">{content}</div>
                        )}
                      </Reveal>
                    )
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

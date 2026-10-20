import { useMemo, useState } from 'react'
import Icon from './Icon.jsx'
import ImageSlot from './ImageSlot.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import ProjectModal from './ProjectModal.jsx'
import { projects } from '../data/profile.js'

export default function Portfolio() {
  const [filter, setFilter] = useState('Semua')
  const [selected, setSelected] = useState(null)

  const categories = useMemo(
    () => ['Semua', ...new Set(projects.map((p) => p.category).filter(Boolean))],
    []
  )
  const visible = filter === 'Semua' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="section section--alt" id="portfolio">
      <div className="container">
        <SectionHeader index="04" eyebrow="Portfolio" title={<>Karya <em>pilihan</em></>}>
          Klik salah satu karya untuk melihat foto, video, dan tautan lengkapnya.
        </SectionHeader>

        {categories.length > 2 && (
          <div className="filters" role="tablist" aria-label="Filter kategori">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`filter ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
                <span className="filter__count">
                  {c === 'Semua' ? projects.length : projects.filter((p) => p.category === c).length}
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="projects">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <button className="project" onClick={() => setSelected(p)}>
                <div className="project__media">
                  <ImageSlot src={p.cover} alt={p.title} ratio="4 / 3" label="Cover karya (4:3)" />
                  <span className="project__open" aria-hidden="true">
                    <Icon name="arrow" size={18} />
                  </span>
                </div>
                <div className="project__body">
                  <p className="project__meta">
                    {p.category} · {p.year}
                  </p>
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__summary">{p.summary}</p>
                  {p.tags?.length > 0 && (
                    <ul className="chips chips--sm">
                      {p.tags.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

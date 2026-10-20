import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, eyebrow, title, children }) {
  return (
    <Reveal className="section-header">
      <p className="eyebrow">
        <span>{index}</span> {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </Reveal>
  )
}

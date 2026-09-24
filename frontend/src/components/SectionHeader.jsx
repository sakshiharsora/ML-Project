import { Sparkles } from "lucide-react"

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="page-header-container">
      <div>
        {eyebrow && (
          <div className="eyebrow-pill">
            <Sparkles size={12} />
            {eyebrow}
          </div>
        )}

        <h1 className="page-title">{title}</h1>

        {description && (
          <p className="page-desc">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionHeader
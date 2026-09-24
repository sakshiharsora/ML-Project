function InfoCard({ icon, title, subtitle, children }) {
  return (
    <section className="glass-card" style={{ marginBottom: "24px" }}>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "20px" }}>

        {icon && (
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid var(--border-glow)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent-indigo)",
            flexShrink: 0
          }}>
            {icon}
          </div>
        )}

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", lineHeight: "1.2" }}>
            {title}
          </h3>

          {subtitle && (
            <p style={{ color: "var(--text-secondary)", fontSize: "13px", marginTop: "4px" }}>
              {subtitle}
            </p>
          )}
        </div>

      </div>

      <div style={{ color: "var(--text-light)", fontSize: "14px", lineHeight: "1.6" }}>
        {children}
      </div>

    </section>
  )
}

export default InfoCard